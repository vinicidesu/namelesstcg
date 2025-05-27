import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';

async function UserList(){
    const responseData = await getUsers();
    console.log(responseData)
    return responseData
}

export default UserList;