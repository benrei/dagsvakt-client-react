import { gql } from "@apollo/client";
let api = {
  customerUpdate: gql`
    mutation($_id: String, $data: UpdateCustomer) {
      customer: updateCustomer(_id: $_id, data: $data) {
        _id
      }
    }
  `,
  customerObjectsServicesComments: gql`
    query customerQuery($id: ID!) {
      customer(id: $id) {
        _id
        name
        number
        phone
        email
        street
        postCode
        city
        country
        type
        orgNr
        objects {
          _id
          customerId
          brand
          model
          info
          serialIn
          serialOut
          installedTime
          serviceInterval
          warrantyStartTime
          geometry {
            type
            coordinates
          }
          services {
            _id
            customerId
            objectId
            time
            comments {
              _id
              parentId
              message
              time
              userId
            }
            metadata {
              createdTime
              createdBy
              updatedTime
              updatedBy
            }
          }
          metadata {
            createdTime
            createdBy
            updatedTime
            updatedBy
          }
        }
        metadata {
          createdTime
          createdBy
          updatedTime
          updatedBy
        }
      }
    }
  `,
  customersTable: gql`
    {
      customersObjectsServices {
        _id
        name
        number
        phone
        email
        street
        postCode
        city
        country
        objects {
          _id
          brand
          model
          info
          installedTime
          serviceInterval
          warrantyStartTime
          serialIn
          serialOut
          geometry {
            type
            coordinates
          }
          services {
            _id
            time
          }
        }
      }
    }
  `,
  customers: gql`
    {
      customers {
        _id
        name
        number
        phone
        email
        street
        postCode
        city
        country
        type
        orgNr
        metadata {
          createdTime
          createdBy
          updatedTime
          updatedBy
        }
      }
    }
  `,
  customersObjects: gql`
    {
      customers {
        _id
        name
        number
        type
        orgNr
        objects {
          _id
          brand
          model
        }
      }
    }
  `,
  objects: gql`
    {
      objects {
        _id
        customerId
        brand
        model
        info
        serialIn
        serialOut
        installedTime
        serviceInterval
        warrantyStartTime
        metadata {
          createdTime
          createdBy
          updatedTime
          updatedBy
        }
      }
    }
  `,
  objectServicesComments: gql`
    query objectQuery($id: ID!) {
      object(id: $id) {
        _id
        customerId
        brand
        model
        info
        serialIn
        serialOut
        installedTime
        serviceInterval
        warrantyStartTime
        services {
          _id
          customerId
          objectId
          time
          comments {
            _id
            parentId
            message
            time
            userId
          }
          metadata {
            createdTime
            createdBy
            updatedTime
            updatedBy
          }
        }
        metadata {
          createdTime
          createdBy
          updatedTime
          updatedBy
        }
      }
    }
  `,
  services: gql`
    {
      services {
        _id
        customerId
        objectId
        time
        metadata {
          createdTime
          createdBy
          updatedTime
          updatedBy
        }
      }
    }
  `,
  servicesComments: gql`
    {
      services {
        _id
        customerId
        objectId
        time
        comments {
          _id
          parentId
          message
          time
          userId
        }
        metadata {
          createdTime
          createdBy
          updatedTime
          updatedBy
        }
      }
    }
  `,
  comments: gql`
    {
      comments {
        _id
        parentId
        message
        time
        userId
      }
    }
  `
};

export default api;
