import axiosClient from "./axiostClient";
const EmployeeApi={
    getEmployee: () => {
        const url='sfinvietnam/employees';
        return axiosClient.get(url)
    },

    getByEmployeeID: (employeeID:string) => {
        const url = `sfinvietnam/employees/${employeeID}`;
        return axiosClient.get(url);
    }
}

export default EmployeeApi;