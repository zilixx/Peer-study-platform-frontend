<template>
    <div id="register-page">
        <el-row class="heading-text">
            <h3>Select a course</h3>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="8">
                <el-select v-model="courseValue" placeholder="Select your course"
                           @change="submitCourse">
                    <el-option
                        v-for="item in courseOptions"
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
                <el-select v-model="timeValue" placeholder="Select your time"
                           @change="submitDay">
                    <el-option
                        v-for="item in day"
                        :key="item.id"
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
                    :data="getUploadParams"
                    :before-remove="beforeRemove"
                    :on-success="uploadSuccess"
                    :limit="1"
                    :file-list="fileList"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">Select a file<i
                        class="el-icon-upload el-icon--right"></i></el-button>

                    <div slot="tip" class="el-upload__tip">No larger than 10MB</div>
                </el-upload>
            </el-col>

        </el-row>

        <el-row type="flex" justify="center" id="confirm-button">
            <el-col :span="8">
                <el-button style="width: 35%" type="success" @click="submitUpload">
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
            courseOptions: [],
            day: [
                {
                    id: '1',
                    label: 'Monday'
                }, {
                    id: '2',
                    label: 'Tuesday'
                }, {
                    id: '3',
                    label: 'Wednesday'
                }, {
                    id: '4',
                    label: 'Thursday'
                }, {
                    id: '5',
                    label: 'Friday'
                }, {
                    id: '6',
                    label: 'Saturday'
                }, {
                    id: '7',
                    label: 'Sunday'
                }
            ],

            courseId: "",
            time: "",

            fileList: [],
            courseValue: [],
            timeValue: []
        };
    },
    mounted() {
        this.$axios.get("http://localhost:8888/register/all")
            .then((res) => {
                this.courseOptions = res.data
                this.$message({
                    message: "Data updated.",
                    type: "info",
                    duration: 1000
                })
            })
    },

    computed: {
        getUploadParams: function () {
            return {
                sid: this.$store.getters.getUser.sid,
                courseId: this.courseId,
                time: this.time
            };
        }
    },

    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        beforeRemove(file) {
            return this.$confirm(`Are you sure to delete ${file.name}？`);
        },
        submitCourse(optionVal) {
            this.courseId = optionVal
        },
        submitDay(optionVal) {
            this.time = optionVal
        },
        uploadSuccess(response) {
            if (response.fileStat & response.insertStat) {
                this.$message({
                    message: "Upload successful.",
                    type: "success",
                    duration: 1000
                })
            } else {
                this.$message({
                    message: "Upload failed",
                    type: "error",
                    duration: 1000
                })
            }
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

.el-row.heading-text {
    margin-top: 15px;
}

.el-col {
    width: 100%;
}

.el-select {
    width: 35%;
}

#confirm-button {
    margin-top: 40px;
}

</style>