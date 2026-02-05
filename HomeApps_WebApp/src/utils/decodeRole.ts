import Role from "./enums/roles";

const decodeRole = (deserializedToken: any): Role | null => {
  const roleString: string = deserializedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  switch (roleString) {
    case 'SystemOwner':
      return Role.SystemOwner;
    case 'SystemAdmin':
      return Role.SystemAdmin;
    case 'SystemMember':
      return Role.SystemMember;
    default:
      return null;
  }
}

export default decodeRole;
