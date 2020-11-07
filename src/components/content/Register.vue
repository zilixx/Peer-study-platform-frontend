<template>
    <div id="register-page">
        <el-row class="heading-text">
            <h3>Select a course</h3>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="8">
                <el-select v-model="course" placeholder="please choose"
                           action="http://localhost:8888/register"
                           @change="submitCourse()">
                    <el-option
                        v-for="item in options"
                        :key="item.name"
                        :value="item.courseId"
                        :label="item.name"
                    >
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row class="heading-text">
            <h3>Select your available time</h3>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="8">
            <el-select v-model="availableDay" placeholder="please choose"
                       @change="submitDay()">
                <el-option
                    v-for="item in day"
                    :key="item.value"
                    :value="item.label"
                >
                </el-option>
            </el-select>
            </el-col>
        </el-row>

        <el-row class="heading-text">
            <h3>Upload CV</h3>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="8">
                <el-upload
                    class="upload"
                    ref="upload"
                    action="http://localhost:8888/register/upload"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :limit="1"
                    :file-list="fileList"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">Select a file<i class="el-icon-upload el-icon--right"></i></el-button>

                    <div slot="tip" class="el-upload__tip">No larger than 10MB</div>
                </el-upload>
            </el-col>

        </el-row>

        <el-row type="flex" justify="center" id="confirm-button">
            <el-col :span="8">
                <el-button style="width: 35%" type="success" @click="submitUpload" >
                    Confirm
                </el-button>
            </el-col>
        </el-row>

    </div>

</template>

<script>
export default {
    name: "Register",

    data() {
        return {
            options: [],
            day: [
                {
                    value: '1',
                    label: 'Monday'
                }, {
                    value: '2',
                    label: 'Tuesday'
                }, {
                    value: '3',
                    label: 'Wednesday'
                }, {
                    value: '4',
                    label: 'Thursday'
                }, {
                    value: '5',
                    label: 'Friday'
                }, {
                    value: '6',
                    label: 'Saturday'
                }, {
                    value: '7',
                    label: 'Sunday'
                }
            ],
            course: '',
            availableDay: '',
            fileList: [],
        };
    },
    mounted() {
        this.$axios.get("http://localhost:8888/register/all", {
            params: {course: this.course}
        })
            .then((res) => {
                this.options = res.data
                this.$message({
                    message: "Data updated.",
                    type: "info",
                    duration: 1000
                })
            }).catch((err) => {
            console.log(err)
        })
    },
    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        beforeRemove(file) {
            return this.$confirm(`Are you sure to delete ${file.name}？`);
        },
        submitCourse() {
            console.log('You chose', this.course)
            this.$axios.get("http://localhost:8888/register/select", {
                params: {courseId: this.course}
            }).then((res) => {
                console.log(res.data)
            })

        },
        submitDay() {
            console.log('You chose', this.availableDay)
            this.$axios.get("http://localhost:8888/register/selectDay", {
                params: {day: this.availableDay}
            }).then((res) => {
                console.log(res.data)
            })
        }
    }

}
</script>

<style scoped>
div#register-page {
    width: 100%;
    text-align: center;
}
.el-row {
    text-align: center;
    width: 100%;
}

.el-row.heading-text{
    margin-top: 15px;
}

.el-col{
    width: 100%;
}

.el-select{
    width: 35%;
}

#confirm-button{
    margin-top: 40px;
}

</style>