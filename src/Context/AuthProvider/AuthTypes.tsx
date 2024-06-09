enum Authorization {
    NoAccess,
    Read,
    ReadWrite,
    Checker,
    Create
  }
  



let getAccessTypeFromString = (str:string):Authorization => {
  switch (str) {
    case "R":{
        return Authorization.Read;
    }
    case "Read":{
        return Authorization.Read;
    }
    case "RW":{
        return Authorization.ReadWrite;
    }
    case "ReadWrite":{
        return Authorization.ReadWrite;
    }
    case "Write":{
        return Authorization.ReadWrite;
    }
    case "CHECKER":{
        return Authorization.Checker;
    }
    case "Create":{
        return Authorization.Create;
    }
    default :{
        return Authorization.NoAccess
    }
    
  }
}

let getAccessTypeFromBool = (bool:boolean) : Authorization => {
  switch (bool) {
  case true : return Authorization.ReadWrite
  default : return Authorization.NoAccess
  }
}

// let getArrayData = (dict, key) => {
//   switch Dict.get(dict, key) {
//   | Some(value) =>
//     switch value->JSON.Decode.array {
//     | Some(arr) =>
//       let loginRoleArray = arr->Array.reduce([], (acc, item) => {
//         switch item->JSON.Decode.string {
//         | Some(str) => acc->Array.push(str)
//         | None => ()
//         }
//         acc
//       })
//       loginRoleArray
//     | None => []
//     }
//   | None => []
//   }
// }

// let getAccessType = (accessType: Js.Nullable.t<string>) => {
//   switch accessType->Js.Nullable.toOption {
//   | Some(str) => getAccessTypeFromString(str)
//   | None => NoAccess
//   }
// }

// let getConvertedAuthInfoType = (dict, key) => {
//   let access = getString(dict, key, "NA")
//   getAccessType(access->Nullable.make)
// }

// let bestOf = (authorizations: array<authorization>) => {
//   authorizations->Js.Array2.includes(ReadWrite)
//     ? ReadWrite
//     : authorizations->Js.Array2.includes(Checker)
//     ? Checker
//     : authorizations->Js.Array2.includes(Create)
//     ? Create
//     : authorizations->Js.Array2.includes(Review)
//     ? Review
//     : authorizations->Js.Array2.includes(Read)
//     ? Read
//     : authorizations->Js.Array2.includes(Create)
//     ? Create
//     : authorizations->Js.Array2.includes(Review)
//     ? Review
//     : NoAccess
// }

// let worstOf = (authorizations: array<authorization>) => {
//   authorizations->Js.Array2.includes(NoAccess)
//     ? NoAccess
//     : authorizations->Js.Array2.includes(Read)
//     ? Read
//     : authorizations->Js.Array2.includes(Create)
//     ? Create
//     : authorizations->Js.Array2.includes(Review)
//     ? Review
//     : authorizations->Js.Array2.includes(Checker)
//     ? Checker
//     : authorizations->Js.Array2.includes(Create)
//     ? Create
//     : authorizations->Js.Array2.includes(Review)
//     ? Review
//     : ReadWrite
// }
