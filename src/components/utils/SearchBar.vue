<!-- Search bar component -->
<template>
    <div class="searchBox">
        <div class="searchBoxs">
            <el-input
                    placeholder="Please type in search content"
                    @keyup.enter.native="searchKeyup"
                    v-model.trim="searchValue"
                    class="input-with-select"
                    clearable
            >
                <el-select v-model="nameValue" slot="prepend" placeholder="Please select" id="input-select-place">
                    <el-option
                            v-for="item in nameOption"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    ></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
            <el-button icon="el-icon-refresh" @click="refresh" class="refreshBtn"></el-button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "SearchBar",
        props: {
            nameOption: [Array, Object],
        },
        data() {
            return {
                nameValue: '',
                searchValue: ''
            }
        },
        methods: {
            /**Search method**/
            search() {
                let filters = {}
                filters.name = this.nameValue // 'name' || 'id'
                filters.value = this.searchValue // 具体值
                if (filters.value === '') {
                    this.$message.warning('Empty search content！')
                    return
                } else {
                    this.$emit('searchEvent', filters)
                }
            },
            searchKeyup() {
                let filters = {}
                this.statusValue = ''
                filters.name = this.nameValue // 'name' || 'id'
                filters.value = this.searchValue // 具体值
                if (filters.value === '') {
                    this.$message.warning('Empty search content！')
                    return
                } else {
                    this.$emit('searchEvent', filters)
                }
            },
            /**Empty the search content after searching**/
            refresh() {
                this.nameValue = this.nameOption[0].value
                this.searchValue = ''
                this.$emit('refreshEvent')
            }
        },
        computed: {},
        created() {
            this.nameValue = this.nameOption[0].value
        },
        mounted() {
        },
        watch: {}
    }
</script>

<style lang="scss" scoped="scoped">
    .searchBox {
        .refreshBtn {
            vertical-align: middle;
            padding: 0;
            width: 32px;
            height: 32px;
            margin-left: 10px;
            background: #3c72ca;
            color: #fff;
        }

        /deep/ .el-select .el-input {
            width: 190px;
        }

        /deep/ .el-select-dropdown {
            width: 270px !important;
        }
    }

    .btntext {
        font-size: 12px;
        line-height: 3;
    }

    .btnBox {
        text-align: left;

        button {
            font-size: 12px;
            padding: 8px 20px;
            color: #666666;
            background: #f0f2f7;
            border: 1px solid #f0f2f7;
            white-space: nowrap;
            cursor: pointer;
            text-align: center;
            box-sizing: border-box;
            outline: 0;
            font-weight: 500;
            border-radius: 0px;
            margin: 0 10px 0 0;
        }

        .active {
            border: 1px solid #56d6c4;
            background: #56d6c4;
            color: #ffffff;
        }
    }
</style>
<style lang="scss">
    .searchBox {
        .el-input__inner {
            height: 30px;
        }

        .searchBoxs {
            height: 48px;
            padding-right: 10px;
            text-align: right;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-end;

            .el-input-group > .el-input__inner {
                vertical-align: baseline;
            }

            .input-with-select {
                .el-select {
                    width: 110px;

                    .el-input {
                        width: 110px;
                        border: none;
                    }

                    .el-select__caret {
                        color: #000;
                    }
                }

                .el-input-group__append {
                    background: #fff;
                    border: none;

                    .el-button {
                        vertical-align: middle;
                        padding: 0;
                        width: 30px;
                        height: 30px;
                    }
                }
            }

            .el-input-group__prepend {
                background: #fff;
                border: none;
                position: relative;

                &::before {
                    position: absolute;
                    top: 8px;
                    right: 0px;
                    width: 1px;
                    height: 16px;
                    content: '';
                    background: #bebebe;
                }
            }

            .input-with-select > .el-input__inner {
                width: 210px;
                border: none;
                background: #fff;
            }

            .el-select .el-input.is-focus .el-input__inner {
                border-color: transparent;
            }
        }

        .el-select {
            width: 150px;

            .el-input {
                width: 150px;
            }
        }

        .el-input {
            width: 180px;
            height: 32px;
            border: 1px solid #e5e5e5;
            box-sizing: border-box;
        }
    }

    #input-select-place {
        text-align: center;
        color: #000;
    }
</style>