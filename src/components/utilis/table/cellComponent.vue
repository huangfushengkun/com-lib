<template functional>
    <!---------------------------------------- 复选框 ----------------------------------------->
    <el-table-column
        v-if="props.items.type=='chk'" 
        type="selection"
        :width="props.items.width"
        class-name="dz-p"
        :fixed="props.items.fixed?true:false" 
    ></el-table-column>
    <!---------------------------------------- 删除 ----------------------------------------->
    <el-table-column
        v-else-if="props.items.type=='delete'"
        :label="props.items.name"
        :width="props.items.width" 
        class-name="dz-p"
        :fixed="props.items.fixed?true:false" 
    >
       <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="listeners.fDeleteBtnClick(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    <!---------------------------------------- 可编辑 ----------------------------------------->
    <el-table-column
        v-else-if="props.edit=='Y'"
        :label="props.items.name"
        :width="props.items.width"
        :fixed="props.items.fixed?true:false"  
    >
        <template slot-scope="scope">
            <div v-if="scope.row._edit" class="cell-0">
                <div v-if="!Array.isArray(scope.row[props.items.key])" class="cell-0">
                    <div 
                        v-if="scope.row['_edit'][props.items.key]"
                        @dblclick="listeners.fCellDbClick($event,scope.$index,scope.row)"
                    >
                         <p>{{scope.row[props.items.key]==""?"—":scope.row[props.items.key]}}</p>
                         <el-input 
                            class="none" 
                            :value="scope.row[props.items.key]"
                            placeholder="请输入内容"
                            @input="listeners.fCellInputInput(
                                $event,
                                scope.row,
                                props.items.key
                            )" 
                            @blur="listeners.fCellInputBlur(
                                $event,
                                scope.$index,
                                scope.row,
                                scope.row._rule?
                                (scope.row._rule[props.items.key]?
                                 scope.row._rule[props.items.key]
                                 :props.items.rule
                                )
                                :props.items.rule
                            )"
                        ></el-input>
                    </div>

                    <div 
                        v-else
                    >
                        <p>{{scope.row[props.items.key]==""?"—":scope.row[props.items.key]}}</p>
                    </div>
                </div>
                <div
                    v-else
                    class="cell-0" 
                    v-for="(item,key) in scope.row[props.items.key]"
                    :key="key"
                >
                    <div
                        v-if="scope.row['_edit'][props.items.key][key]"
                        @dblclick="listeners.fCellDbClick($event,scope.$index,scope.row)"
                    >
                        <p>{{item==""?"—":item}}</p>
                        <el-input
                            v-if="scope.row['_edit'][props.items.key][key]" 
                            class="none"
                            :value="scope.row[props.items.key][key]" 
                            placeholder="请输入内容"
                            @input="listeners.fCellInputInput(
                                $event,
                                scope.row,
                                props.items.key,
                                key
                            )"      
                            @blur="listeners.fCellInputBlur(
                                $event,
                                scope.$index,
                                scope.row,
                                scope.row._rule?
                                (scope.row._rule[props.items.key]?
                                 (scope.row._rule[props.items.key][key]?
                                  scope.row._rule[props.items.key][key]
                                  :props.items.rule)
                                 :props.items.rule)
                                :props.items.rule
                            )"
                        ></el-input>
                    </div>
                    <div
                        v-else
                    >
                        <p>{{item==""?"—":item}}</p>
                    </div>               
                </div>
            </div>
            <div v-else  class="cell-0">
                <div 
                    v-if="!Array.isArray(scope.row[props.items.key])"
                    @dblclick="listeners.fCellDbClick($event,scope.$index,scope.row)"
                    >
                    <p>{{scope.row[props.items.key]==""?"—":scope.row[props.items.key]}}</p>
                    <el-input 
                       class="none" 
                       :value="scope.row[props.items.key]" 
                       placeholder="请输入内容"
                       @input="listeners.fCellInputInput(
                            $event,
                            scope.row,
                            props.items.key
                       )"      
                       @blur="listeners.fCellInputBlur(
                           $event,
                           scope.$index,
                           scope.row,
                           scope.row._rule?
                            (scope.row._rule[props.items.key]?
                             scope.row._rule[props.items.key]
                             :props.items.rule
                            )
                            :props.items.rule
                        )"
                       ></el-input>
                </div>
                <div
                    v-else
                    v-for="(item,key) in scope.row[props.items.key]"
                    :key="key"
                    @dblclick="listeners.fCellDbClick($event,scope.$index,scope.row)"
                >
                    <p>{{item==""?"—":item}}</p>
                    <el-input
                        class="none" 
                        :value="scope.row[props.items.key][key]" 
                        placeholder="请输入内容"
                        @input="listeners.fCellInputInput(
                            $event,
                            scope.row,
                            props.items.key,
                            key
                        )"      
                        @blur="listeners.fCellInputBlur(
                            $event,
                            scope.$index,
                            scope.row,
                            scope.row._rule?
                            (scope.row._rule[props.items.key]?
                             (scope.row._rule[props.items.key][key]?
                             scope.row._rule[props.items.key][key]
                             :props.items.rule)
                             :props.items.rule)
                            :props.items.rule
                        )"
                    ></el-input>
                </div>
            </div>
        </template>
    </el-table-column>
    <!---------------------------------------- 不可编辑 ----------------------------------------->
       <el-table-column
        v-else-if="props.edit=='N'"
        :label="props.items.name"
        :width="props.items.width"
        :fixed="props.items.fixed?true:false" 
       >
        <template slot-scope="scope">
            <div 
              v-if="!Array.isArray(scope.row[props.items.key])"
            >
              <p v-if="props.items.format">{{scope.row[props.items.key]==""?"—":props.items.format(scope.row[props.items.key])}}</p>
              <p v-else>{{scope.row[props.items.key]==""?"—":scope.row[props.items.key]}}</p>
            </div>
            <div 
              v-else
              v-for="(item,key) in scope.row[props.items.key]"
              :key="key"
            >
              <p v-if="props.items.format">{{item==""?"—":props.items.format(item)}}</p>
              <p v-else>{{item==""?"—":item}}</p>
            </div>                    
        </template>
    </el-table-column>
</template>
<script>
/*
 * 单元格
 * */
export default {
    name:"cellComponent",
    props:["items","events","edit"],
}
</script>
<style>
  .none{
      display: none;
  }
  .error_input{
      border-color: #ff0000 !important;
  }
</style>