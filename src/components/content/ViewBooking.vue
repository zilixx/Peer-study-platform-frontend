<template>
    <div id="view-booking">
        <el-row id="row-head">
            <el-col :span="6">
                <p>Course Name</p>
            </el-col>
            <el-col :span="4">
                <p>Tutor Name</p>
            </el-col>
            <el-col :span="8">
                <p>Reserved Time</p>
            </el-col>
            <el-col :span="4">
                <p>Cancel the booking</p>
            </el-col>
        </el-row>
        <div :key="item.id" v-for="item in resList">
            <el-row :gutter="10" justify="space-between">
                <el-col :span="6">
                    <p>{{item.courseName}}</p>
                </el-col>
                <el-col :span="4">
                    <p>{{item.tutorName}}</p>
                </el-col>
                <el-col :span="8">
                    <p>{{item.time}}</p>
                </el-col>
                <el-col :span="4">
                    <el-button type="danger" icon="el-icon-delete" @click="cancelBooking(item.id)" round>Remove</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewBooking",
    data (){
        return {
            resList: []
        }
    },
    mounted() {
        // Get data when Vue renders this component
        this.$axios.get("http://localhost:8888/api/rest") // TODO: Edit the API after testing
            .then((res)=>{
                this.resList = res.data.response
                this.$message({
                    message: "Data updated.",
                    type: "info",
                    duration: 1000
                })
            }).catch((err) => {console.log(err)})
    },
    methods:{
        /**
         * event-function
         * @param itemId: Id of response data
         * @description delete the target booking.
         * */
        cancelBooking (itemId) {
            // TODO: Edit the API after testing.
            this.$axios.get("http://localhost:8888/api/delete", {
                params: {itemId: itemId}
            }).then((res) => {
               if (res.data.response.deleteStat){
                   // 抄来的管用代码，link: https://segmentfault.com/q/1010000011726114
                   let deletedItem = this.resList.splice(
                       this.resList.findIndex(item => item.id === itemId), 1)
                   console.log(deletedItem)
                   this.deleteHint(true) // TODO: possible async ops here
               } else {
                   this.deleteHint(false)
               }
            })
        },

        /**
         * private function
         * @param deleteStat
         * @description Pop message in the browser.
         */
        deleteHint (deleteStat) {
            if (deleteStat){
                this.$message({
                    message: "Booking deleted successfully!",
                    type: "success",
                    duration: 1000
                })
            } else {
                this.$message({
                    message: "Fail to delete booking!",
                    type: "error",
                    duration: 1000
                })
            }
        }
    }
}
</script>

<style scoped>
div#view-booking{
    height: 100%;
}
.el-row{
    border-radius: 3px;
    margin-bottom: 7px;
    padding: 5px 0;
    background-color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: center;
}

.el-row#row-head{
    margin-bottom: 0;
    background-color: #f5f5f5;
    border-radius: 0;
}

.el-col{
    height: 100%;
}
p {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 1.2em;
    line-height: 2;
}

.el-row#row-head .el-col p{
    font-size: 0.9em;
    line-height: 1;
}
</style>