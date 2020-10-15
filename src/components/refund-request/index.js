import api from '../../services/api'

const postRequest = (values, employeeId, employeeName, token, setResponseStatus) => {
    api.post(
        "/refunds",
        {
            ...values,
            status: "pending",
            denied: "",
            userId: employeeId,
            userName: employeeName,
        },
        {
            headers: {
            authorization: `Bearer ${token}`,
            },
        }
    ).then(response => setResponseStatus(response.status))
}

export default postRequest;