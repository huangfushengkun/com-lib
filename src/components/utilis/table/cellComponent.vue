<template functional>
  <!---------------------------------------- 复选框 ----------------------------------------->
  <el-table-column
    v-if="props.items.type == 'chk'"
    type="selection"
    align="center"
    :width="props.items.width"
    class-name="dz-p"
    :fixed="props.items.fixed ? true : false"
  />
  <!---------------------------------------- 图片 ----------------------------------------->
  <el-table-column
    v-else-if="props.items.type == 'img'"
    :label="props.items.name"
    align="center"
    :width="props.items.width"
    class-name="dz-p"
    :fixed="props.items.fixed ? true : false"
  >
    <template slot-scope="scope">
      <section class="vares_thumbnail">
        <el-image
          class="goodsImg"
          :style="{
            width: props.items.imgWidth || '80px',
            height: props.items.imgHeight || '100px'
          }"
          :src="scope.row[props.items.url]"
          :preview-src-list="[scope.row[props.items.url]]"
        />
        <!-- <div class="vares_text" v-if="type != 'editOrder'"> -->
        <div class="vares_text">
          <span>
            {{ scope.row[props.items.namekey] }}
          </span>
          <span>
            {{ scope.row[props.items.infokey] }}
          </span>
        </div>
      </section>
    </template>
  </el-table-column>
  <!---------------------------------------- 删除 ----------------------------------------->
  <el-table-column
    v-else-if="props.items.type == 'delete'"
    :label="props.items.name"
    align="center"
    :width="props.items.width"
    class-name="dz-p"
    :fixed="props.items.fixed ? true : false"
  >
    <template slot-scope="scope">
      <el-button
        v-for="(btn, index) in props.items.option"
        :key="index"
        type="text"
        @click="
          listeners.fDeleteBtnClick(scope.row, scope.$index, btn.handleName)
        "
        >{{ btn.name }}</el-button
      >
      <!-- <el-button
        v-for="(btn, index) in props.items.option"
        :key="index"
        type="text"
        size="mini"
        @click="listeners.fDeleteBtnClick(scope.$index, scope.row)"
        >{{ btn.name }}</el-button
      > -->
    </template>
  </el-table-column>
  <!---------------------------------------- 可编辑 ----------------------------------------->
  <el-table-column
    v-else-if="props.edit == 'Y'"
    :label="props.items.name"
    align="center"
    :formatter="props.items.formatter"
    :width="props.items.width"
    :fixed="props.items.fixed ? true : false"
  >
    <template slot-scope="scope">
      <!-- _edit（单元格是否可编辑 字段）字段存在  -->
      <div v-if="scope.row._edit" class="cell-0">
        <div v-if="!Array.isArray(scope.row[props.items.key])" class="cell-0">
          <!-- 当前行 _edit[props.items.key] 值存在 -->
          <div
            v-if="scope.row['_edit'][props.items.key]"
            @dblclick="listeners.fCellDbClick($event, scope.$index, scope.row)"
          >
            <!-- 单元格样式 -->
            <p
              :class="
                !scope.row[props.items.key + '_r']
                  ? ''
                  : scope.row[props.items.key] >
                    scope.row[props.items.key + '_r']
                  ? 'yby_red'
                  : ''
              "
            >
              {{
                scope.row[props.items.key] == ""
                  ? "—"
                  : scope.row[props.items.key]
              }}
              <i v-if="scope.row[props.items.key + '_r']">{{
                "/" + scope.row[props.items.key + "_r"]
              }}</i>
            </p>
            <el-input
              class="none"
              :value="scope.row[props.items.key]"
              placeholder="请输入内容"
              @input="
                listeners.fCellInputInput($event, scope.row, props.items.key)
              "
              @blur="
                listeners.fCellInputBlur(
                  $event,
                  scope.$index,
                  scope.row,
                  scope.row._rule
                    ? scope.row._rule[props.items.key]
                      ? scope.row._rule[props.items.key]
                      : props.items.rule
                    : props.items.rule,
                  scope.column
                )
              "
            />
          </div>
          <!-- 当前行 _edit[props.items.key] 值不存在 -->
          <div v-else>
            <p>
              {{
                scope.row[props.items.key] == ""
                  ? "—"
                  : scope.row[props.items.key]
              }}
              <!-- key值/key_r值 -->
              <i v-if="scope.row[props.items.key + '_r']">{{
                "/" + scope.row[props.items.key + "_r"]
              }}</i>
            </p>
          </div>
        </div>
        <div
          v-else
          class="cell-0"
          v-for="(item, key) in scope.row[props.items.key]"
          :key="key"
        >
          <div
            v-if="scope.row['_edit'][props.items.key][key]"
            @dblclick="listeners.fCellDbClick($event, scope.$index, scope.row)"
          >
            <p>
              {{ item == "" ? "—" : item }}
              <i v-if="scope.row[props.items.key + '_r']">{{
                "/" + scope.row[props.items.key + "_r"]
              }}</i>
            </p>
            <el-input
              v-if="scope.row['_edit'][props.items.key][key]"
              class="none"
              :value="scope.row[props.items.key][key]"
              placeholder="请输入内容"
              @input="
                listeners.fCellInputInput(
                  $event,
                  scope.row,
                  props.items.key,
                  key
                )
              "
              @blur="
                listeners.fCellInputBlur(
                  $event,
                  scope.$index,
                  scope.row,
                  scope.row._rule
                    ? scope.row._rule[props.items.key]
                      ? scope.row._rule[props.items.key][key]
                        ? scope.row._rule[props.items.key][key]
                        : props.items.rule
                      : props.items.rule
                    : props.items.rule,
                  scope.column
                )
              "
            />
            <!-- <i>/fu</i> -->
          </div>
          <div v-else>
            <p>{{ item == "" ? "—" : item }}</p>
          </div>
        </div>
      </div>
      <!-- _edit 不存在 整行状态一致  -->
      <div v-else class="cell-0">
        <div
          v-if="!Array.isArray(scope.row[props.items.key])"
          @dblclick="listeners.fCellDbClick($event, scope.$index, scope.row)"
        >
          <p>
            {{
              scope.row[props.items.key] == ""
                ? "—"
                : scope.row[props.items.key]
            }}
            <i v-if="scope.row[props.items.key + '_r']">{{
              "/" + scope.row[props.items.key + "_r"]
            }}</i>
          </p>
          <el-input
            class="none"
            :value="scope.row[props.items.key]"
            placeholder="请输入内容"
            @input="
              listeners.fCellInputInput($event, scope.row, props.items.key)
            "
            @blur="
              listeners.fCellInputBlur(
                $event,
                scope.$index,
                scope.row,
                scope.row._rule
                  ? scope.row._rule[props.items.key]
                    ? scope.row._rule[props.items.key]
                    : props.items.rule
                  : props.items.rule,
                scope.column
              )
            "
          />
        </div>
        <div
          v-else
          v-for="(item, key) in scope.row[props.items.key]"
          :key="key"
          @dblclick="listeners.fCellDbClick($event, scope.$index, scope.row)"
        >
          <p>
            {{ item == "" ? "—" : item }}
            <i v-if="scope.row[props.items.key + '_r']">{{
              "/" + scope.row[props.items.key + "_r"]
            }}</i>
          </p>
          <el-input
            class="none"
            :value="scope.row[props.items.key][key]"
            placeholder="请输入内容"
            @input="
              listeners.fCellInputInput($event, scope.row, props.items.key, key)
            "
            @blur="
              listeners.fCellInputBlur(
                $event,
                scope.$index,
                scope.row,
                scope.row._rule
                  ? scope.row._rule[props.items.key]
                    ? scope.row._rule[props.items.key][key]
                      ? scope.row._rule[props.items.key][key]
                      : props.items.rule
                    : props.items.rule
                  : props.items.rule,
                scope.column
              )
            "
          />
        </div>
      </div>
    </template>
  </el-table-column>
  <!---------------------------------------- 不可编辑 ----------------------------------------->
  <el-table-column
    v-else-if="props.edit == 'N'"
    :label="props.items.name"
    :width="props.items.width"
    :formatter="props.items.formatter"
    align="center"
    :fixed="props.items.fixed ? true : false"
    :cel-style="props.items.statusStyle"
  >
    <template slot-scope="scope">
      <div v-if="!Array.isArray(scope.row[props.items.key])">
        <p v-if="props.items.format">
          {{
            scope.row[props.items.key] == ""
              ? "—"
              : props.items.format(scope.row[props.items.key])
          }}
        </p>
        <p v-else>
          {{
            scope.row[props.items.key] == "" ? "—" : scope.row[props.items.key]
          }}
        </p>
      </div>
      <div v-else v-for="(item, key) in scope.row[props.items.key]" :key="key">
        <p v-if="props.items.format">
          {{ item == "" ? "—" : props.items.format(item) }}
        </p>
        <p v-else>{{ item == "" ? "—" : item }}</p>
      </div>
    </template>
  </el-table-column>
</template>
<script>
/*
 * 单元格
 * */
export default {
  name: "cellComponent",
  props: ["items", "events", "edit"]
};
</script>
<style lang="scss">
.none {
  display: none;
}
.error_input {
  border-color: #ff0000 !important;
  // position: relative;
  // &::before {
  //   display: block;
  //   position: absolute;
  //   width: 20px;
  //   height: 10px;
  //   content: 'asdw';
  //   bottom: -35px;
  //   z-index: 999;
  // }
}
</style>
