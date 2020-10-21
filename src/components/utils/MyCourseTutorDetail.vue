<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        fixed
        prop="tutorSID"
        label="TutorSID"
        width="150">
    </el-table-column>
    <el-table-column
        prop="name"
        label="Name"
        width="120">
    </el-table-column>
    <el-table-column
        prop="courseName"
        label="CourseName"
        width="120">
    </el-table-column>
    <el-table-column
        prop="date"
        label="Date"
        width="120">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="Operations"
        width="120">
      <template slot-scope="scope">
        <el-popconfirm
            confirmButtonText='YES'
            cancelButtonText='No, Thanks'
            icon="el-icon-info"
            iconColor="red"
            title="Are you sure to cancel this tutor session?"
        >
        <el-button slot="reference"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
          Cancel
        </el-button></el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "MyCourseTutorDetail.vue",
  methods: {
    //add function: cancel this tutor will remove this tutor from the reverse tutor list
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    // Add tutor info list here
    return {
      tableData: [{
        tutorSID: '490345232',
        name: 'Nio Wang',
        courseName: 'COMP5619',
        date: 'Monday'
      }, {
        tutorSID: '490345232',
        name: 'Tom Jerry',
        courseName: 'COMP5619',
        date: 'Friday'
      }]
    }
  }
}
</script>

<style scoped>

</style>