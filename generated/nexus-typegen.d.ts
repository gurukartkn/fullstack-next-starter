/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../types/Context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  loginCredentials: { // input type
    email: string; // String!
    password: string; // String!
  }
  registerCredentials: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  LoginResponse: { // root type
    email?: string | null; // String
    username?: string | null; // String
  }
  Mutation: {};
  Query: {};
  implicitLoginResponse: { // root type
    email?: string | null; // String
    loggedIn: boolean; // Boolean!
  }
  registerResponse: { // root type
    message: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  LoginResponse: { // field return type
    email: string | null; // String
    username: string | null; // String
  }
  Mutation: { // field return type
    createAccount: NexusGenRootTypes['registerResponse'] | null; // registerResponse
    login: NexusGenRootTypes['LoginResponse'] | null; // LoginResponse
  }
  Query: { // field return type
    implicitLogin: NexusGenRootTypes['implicitLoginResponse'] | null; // implicitLoginResponse
    test: boolean | null; // Boolean
  }
  implicitLoginResponse: { // field return type
    email: string | null; // String
    loggedIn: boolean; // Boolean!
  }
  registerResponse: { // field return type
    message: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  LoginResponse: { // field return type name
    email: 'String'
    username: 'String'
  }
  Mutation: { // field return type name
    createAccount: 'registerResponse'
    login: 'LoginResponse'
  }
  Query: { // field return type name
    implicitLogin: 'implicitLoginResponse'
    test: 'Boolean'
  }
  implicitLoginResponse: { // field return type name
    email: 'String'
    loggedIn: 'Boolean'
  }
  registerResponse: { // field return type name
    message: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createAccount: { // args
      credentials: NexusGenInputs['registerCredentials']; // registerCredentials!
    }
    login: { // args
      credentials: NexusGenInputs['loginCredentials']; // loginCredentials!
    }
  }
  Query: {
    test: { // args
      bool: boolean; // Boolean!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}