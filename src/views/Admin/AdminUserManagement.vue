<script setup>
import AdminSideBarMenu from "../../components/AdminSideBarMenu.vue";
import TopBarMenu from "../../components/TopBarMenu.vue";
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from "primevue/useconfirm";
import { useRouter } from "vue-router"; 


const router = useRouter(); 
const toast = useToast();
const confirm = useConfirm();

const menu = ref();
const items = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'View Instructor Accounts',
        icon: 'pi pi-user',
        command: () => navigateTo('/AdminSeeAccounts')
      },
      {
        label: 'View UIC Instructors',
        icon: 'pi pi-folder',
        command: () => navigateTo('/AdminSeeInstructors')
      }
    ]
  }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};

const navigateTo = (route) => {
  router.push(route); // Programmatically navigate to the specified route
};


const state = reactive({
    userRequest: [],
    filteredVerifications: [],
    selectedOption: { option: 'Newest', api: 'new' },
    selectedFilterOption: { status: 'All' },
    sortOptions: [
        { option: 'Newest', api: 'new' },
        { option: 'Oldest', api: 'old' }
    ],
    filterOptions: [
        { status: 'All' },
        { status: 'Pending' },
        { status: 'Approved' },
        { status: 'Cancelled' },
        { status: 'Rejected' },
    ]
});

const createAccountVisible = ref(false);
const selectedRowData = ref({});
const defaultPass = ref("defaultPass123"); // Default password


onMounted(() => {
    fetchData();
});

async function fetchData() {
    try {
        console.log(`Fetching data for sort option: ${state.selectedOption.api}`);
        const response = await axios.get(`http://127.0.0.1:8000/api/${state.selectedOption.api}_verification_request`);
        console.log('User verification requests data:', response.data);
        state.userRequest = response.data;
        applyFilter();
    } catch (error) {
        console.error('Error fetching verification requests:', error);
    }
}

function applyFilter() {
    console.log('Selected Filter Option:', state.selectedFilterOption);

    if (state.selectedFilterOption.status !== 'All') {
        state.filteredVerifications = state.userRequest.filter(request => request.status === state.selectedFilterOption.status);
    } else {
        state.filteredVerifications = state.userRequest;
    }

    console.log('Filtered Verifications:', state.filteredVerifications);
}

const approveVerificationRequest = async (requestId) => {
    console.log('Approving request ID:', requestId); // Debugging log
    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/admin/verify/instructor/${requestId}`);
        if (response.status === 200) {
            toast.add({
                severity: 'success',
                summary: 'Approval Success',
                detail: 'Instructor verified successfully.',
                life: 3000
            });
            // Refresh the user request list after approval
            // fetchVerificationRequests();
        }
    } catch (error) {
        console.error('Error approving verification request:', error);
        toast.add({
            severity: 'error',
            summary: 'Approval Error',
            detail: 'Failed to approve verification request.',
            life: 3000
        });
    }
};

const getTextColorStyle = (status) => {
    switch (status) {
        case 'Approved':
            return { color: 'green', fontWeight: '600' }; // Change text color to green for Approved
        case 'Pending':
            return { color: 'orange', fontWeight: '600' }; // Change text color to orange for Pending
        case 'Rejected':
            return { color: 'red', fontWeight: '600' }; // Change text color to red for Rejected
        default:
            return null;
    }
};

const confirm1 = (rowData) => {
    confirm.require({
        message: 'Do you consent this instructor to have access to the system?',
        header: 'Confirmation',
        rejectClass: 'p-button-secondary p-button-outlined',
        rejectLabel: 'No',
        acceptLabel: 'Yes',
        accept: () => {
            approveVerificationRequest(rowData.requestID);
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Verification Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const openCreateAccountDialog = (rowData) => {
    selectedRowData.value = rowData;
    defaultPass.value = "defaultPassword123"; // Set the default password
    createAccountVisible.value = true;
};

const submitAccountCreation = async () => {
    try {
        const formData = new FormData();
        formData.append('instructorID', parseInt(selectedRowData.value.instructorID)); // Convert to integer
        formData.append('instructorEmail', selectedRowData.value.instructorEmail);
        formData.append('defaultPassword', defaultPass.value);

        console.log('Sending account data:', formData);

        const response = await axios.post('http://127.0.0.1:8000/api/admin/create_instructor_account', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        if (response.status === 200) {
            // Account creation successful
            toast.add({
                severity: 'success',
                summary: 'Account Created.',
                detail: 'Instructor account is successfully created!',
                life: 3000
            });

            clearInputFields();
            createAccountVisible.value = false;
        }
    } catch (error) {
        console.error('Error signing up instructor:', error);
        if (error.response) {
            // Check the status code and display appropriate toast message
            if (error.response.status === 400) {
                toast.add({
                    severity: 'warn',
                    summary: 'Account Duplication.',
                    detail: error.response.data.detail, // Display the detailed message from the server
                    life: 3000
                });
            } else if (error.response.status === 500) {
                toast.add({
                    severity: 'error',
                    summary: 'Server Error.',
                    detail: 'Internal server error occurred.',
                    life: 3000
                });
            } else {
                toast.add({
                    severity: 'error',
                    summary: 'Error.',
                    detail: 'Error creating account. Please try again later.',
                    life: 3000
                });
            }
        } else {
            toast.add({
                severity: 'error',
                summary: 'Network Error.',
                detail: 'Error creating account. Please try again later.',
                life: 3000
            });
        }
    }

    console.log('Account created for:', selectedRowData.value);
    console.log('With password:', defaultPass.value);
};

const clearInputFields = () => {
    selectedRowData.value = {}; // Reset selectedRowData
};

</script>

<template>
    <AdminSideBarMenu />
    <TopBarMenu />

    <Toast />
    <Dialog />
    <ConfirmDialog />

    <div class="userManagement-container">
        <span class="greetings">User Management</span>
        <span class="menuButton">
                <Button type="button" id="ellipsisMenu" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
                    aria-controls="overlay_menu" />
                <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
            </span>

        <div class="userManagement-buttons">
            <span class="sortButton">
                <label for="dropdown"> Sort By: </label>
                <Dropdown id="sort" v-model="state.selectedOption" :options="state.sortOptions" optionLabel="option"
                    placeholder="Date" checkmark :highlightOnSelect="false" class="w-full md:w-14rem"
                    @change="fetchData" />
            </span>

            <span class="filterButton">
                <label for="dropdown" id="filterLabel"> Status: </label>
                <Dropdown id="sort" v-model="state.selectedFilterOption" :options="state.filterOptions"
                    optionLabel="status" placeholder="Status" checkmark :highlightOnSelect="false"
                    class="w-full md:w-14rem" @change="applyFilter" />
            </span>

            
        </div>

        <div class="userManagement-table">
            <div class="tableUsers">
                <DataTable :value="state.filteredVerifications"
                    tableStyle="max-width: 80rem; font-family: 'Inter', sans-serif;">
                    <Column field="requestID" header="Request ID" style="color: #DD385A; height: 80px"></Column>
                    <Column field="instructorID" header="Instructor ID" style="color: #DD385A; height: 70px"></Column>
                    <Column field="instructorName" header="Name" style="color: #DD385A; height: 70px"></Column>
                    <Column field="instructorEmail" header="Email" style="color: #DD385A; height: 70px"></Column>
                    <Column field="status" header="Status" style="color: #DD385A; height: 70px">
                        <template #body="slotProps">
                            <span :style="getTextColorStyle(slotProps.data.status)">
                                {{ slotProps.data.status }}
                            </span>
                        </template>
                    </Column>
                    <Column header="Actions" style="color: #DD385A;">
                        <template #body="rowData">
                            <Button v-if="rowData.data.status !== 'Approved'" label="Approve" icon="pi pi-check"
                                class="p-button-info" id="approveButton" @click="confirm1(rowData.data)" />
                            <Button v-if="rowData.data.status !== 'Approved'" label="Reject" icon="pi pi-times"
                                class="p-button-info" id="rejectButton" />
                            <Button v-if="rowData.data.status == 'Approved'" label="Create Account" icon="pi pi-user"
                                id="createAccountButton" @click="openCreateAccountDialog(rowData.data)" />


                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>

        <!-- Dialog for Account Creation -->

        <Dialog v-model:visible="createAccountVisible" modal header="Instructor Account" :style="{ width: '25rem' }">
            <template #header>
                <div class="dialogHeader">
                    <span class="dialogHeader-text">Instructor Account</span>
                </div>
            </template>
            <form @submit.prevent="submitAccountCreation">
                <div class="dialogHeader-subtext">Verify the information below.</div>
                <div class="input-container">
                    <label for="instructorID" class="font-semibold w-6rem">Instructor ID</label>
                    <InputText id="instructorID" class="p-id-input" v-model="selectedRowData.instructorID"
                        autocomplete="off" />
                </div>
                <div class="input-container">
                    <label for="email" class="font-semibold w-6rem">Email</label>
                    <InputText id="email" class="p-email-input" v-model="selectedRowData.instructorEmail"
                        autocomplete="off" />
                </div>
                <div class="input-container">
                    <label for="password" class="font-semibold w-6rem">Password</label>
                    <Password id="password" class="p-password-input" v-model="defaultPass" :feedback="false" />
                </div>
                <div class="buttons-container">
                    <Button class="footerButton" id="footerButton-Cancel" label="Cancel" @click="visible = false"
                        autofocus />
                    <Button class="footerButton" id="footerButton-Submit" label="Submit" type="submit" autofocus />
                </div>

            </form>

        </Dialog>


    </div>
</template>

<style scoped>
* {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
}

.userManagement-container {
    margin-left: 60px;
    padding: 70px 100px;
    color: #DD385A;
}

.greetings {
    font-size: 40px;
    font-weight: 700;
}

.userManagement-buttons {
    padding: 15px 0px;
}

#sort {
    padding: 0px;
    margin-left: 4px;
}

.filterButton {
    margin-left: 15px;
}

#ellipsisMenu {
    background-color: transparent;
    color: #DD385A;
    border: none;
    margin-left: 15px;
}

.userManagement-table {
    margin-top: 5px;
}

button {
    padding: 5px;
    margin: 5px;
}

#approveButton {
    background-color: #31a533;
    color: #ffffff;
    width: 100px;
    border: none;
}

#rejectButton {
    background-color: #cf4545;
    color: #ffffff;
    width: 100px;
    border: none;
}

#createAccountButton {
    background-color: #DD385A;
    border: none;
}

.dialogHeader-text {
    font-size: 20px;
    font-weight: 600;
}

.dialogHeader-subtext {
    margin-bottom: 10px;
}

label {
    font-weight: 500;
}

.input-container {
    padding-top: 15px;
}

.p-id-input {
    margin-left: 15px;
}

.p-email-input {
    margin-left: 15px;
}

.p-password-input {
    margin-left: 15px;
}

.buttons-container {

    margin-top: 20px;
}

#footerButton-Cancel {
    background-color: #607D8B;
    color: #ffffff;
    padding: 7px 15px;
    border: none;
}

#footerButton-Submit {
    background-color: #DD385A;
    color: #ffffff;
    padding: 7px 15px;
    border: none;
}
</style>