<template>
    <div id="view-booking">
        <h1 v-if="isEmpty">No data from the backend server, please try again later.</h1>
        <el-row id="row-head" v-if="isFull">
            <el-col :span="4">
                <p>Match Id</p>
            </el-col>
            <el-col :span="4">
                <p>Course Name</p>
            </el-col>
            <el-col :span="6">
                <p>Tutor Name</p>
            </el-col>
            <el-col :span="6">
                <p>Reserved Time</p>
            </el-col>
            <el-col :span="4">
                <p>Cancel the booking</p>
            </el-col>
        </el-row>
        <div :key="item.matchId" v-for="item in resList">
            <el-row :gutter="10" justify="space-between">
                <el-col :span="4">
                    <p>{{ item.matchId }}</p>
                </el-col>
                <el-col :span="4">
                    <el-tag>{{ item.courseCode }}</el-tag>
                </el-col>
                <el-col :span="6">
                    <p>{{ item.first_name + " " + item.last_name }}</p>
                </el-col>
                <el-col :span="6">
                    <p>{{ item.matchTime }}</p>
                </el-col>
                <el-col :span="4">
                    <el-button type="danger" icon="el-icon-delete" @click="cancelBooking(item.matchId)" round>Remove
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewBooking",
    data() {
        return {
            resList: []
        }
    },
    computed: {
        isFull() {
            return this.resList.length !== 0;
        },
        isEmpty() {
            return this.resList.length === 0;
        }
    },
    mounted() {
        this.updateBookingList();
    },
    methods: {
        /**
         * Update booking list from backend server.
         */
        updateBookingList() {
            this.$axios.get("http://localhost:8888/booking/all", {
                params: {sid: this.$store.getters.getUser.sid}
            }).then((res) => {
                this.resList = res.data
                this.$message({
                    message: "Data updated.",
                    type: "info",
                    duration: 1000
                })
            }).catch((err) => {
                console.log(err)
            })
        },

        /**
         * event-function
         * @param itemId: Id of response data
         * @description delete the target booking.
         * */
        cancelBooking(itemId) {
            this.$axios.get("http://localhost:8888/booking/delete", {
                params: {bookingId: itemId}
            }).then((res) => {
                console.log(res.data)
                let deleteStat = JSON.parse(res.data.deleteStat);
                if (deleteStat) {
                    // reference，link: https://segmentfault.com/q/1010000011726114
                    let deletedItem = this.resList.splice(
                        this.resList.findIndex(item => item.matchId === itemId), 1)
                    console.log(deletedItem)
                    this.deleteHint(true)
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
        deleteHint(deleteStat) {
            if (deleteStat) {
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
div#view-booking {
    height: 100%;
}

.el-row {
    border-radius: 3px;
    margin-bottom: 7px;
    padding: 5px 0;
    background-color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: center;
}

.el-row#row-head {
    margin-bottom: 0;
    background-color: #f5f5f5;
    border-radius: 0;
}

.el-col {
    height: 100%;
}

p {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 1.2em;
    line-height: 2;
}

.el-row#row-head .el-col p {
    font-size: 0.9em;
    line-height: 1;
}

.el-tag {
    margin-top: 2%;
    line-height: 2;
    font-size: inherit;
}
</style>