export const vcrSource = [
' interface VCR { ',
    ' achRequest: { ',
        ' accountStatus: string,  ',
        ' accountType: string, ',
        ' achCcd: boolean, ',
        ' achCcdPlus: boolean, ',
        ' achCtx: boolean, ',
        ' achDec: string, ',
        ' bankAccountNo: string, ',
        ' bankName: string, ',
        ' bankRoutingNo: string, ',
        ' city: string, ',
        ' country: string, ',
        ' emailAddress: string, ',
        ' other: string, ',
        ' phone: { ',
            ' countryCode: string, ',
            ' extension: string, ',
            ' number: string, ',
        ' } ',
        ' state: string, ',
        ' street: string, ',
        ' zip: string, ',
    ' } ',
    ' action: string, ',
    ' activityCode: string, ',
    ' activityLogs: [ ',
        ' { ',
            ' activity: string, ',
            ' activityCode: string, ',
            ' actualUser: string, ',
            ' channel: string, ',
            ' collaborate: boolean, ',
            ' collaboratedWith: string, ',
            ' comment: string, ',
            ' dateTime: Date, ',
            ' exception: string, ',
            ' seq: any, ',
            ' step: any, ',
            ' synWithSAP: true, ',
            ' type: string, ',
            ' userEmail: string, ',
            ' userName: string, ',
        ' } ',
    ' ] ',
    ' address: { ',
        ' address1: string, ',
        ' address2: string, ',
        ' address3: string, ',
        ' city: string, ',
        ' country: string, ',
        ' location: string, ',
        ' name: string, ',
        ' state: string, ',
        ' zip: string, ',
    ' } ',
    ' agentName: string, ',
    ' attachments: [ ',
        ' { ',
            ' arid: string, ',
            ' attid: string, ',
            ' creator: string, ',
            ' documentType: string, ',
            ' documentTypeDesc: string, ',
            ' documentid: string, ',
            ' expiryDate: Date, ',
            ' filename: string, ',
            ' filetype: string, ',
            ' primaryDoc: boolean, ',
            ' restricted: boolean, ',
            ' upload: string, ',
            ' uploadedBy: string, ',
            ' uploadedDate: Date, ',
            ' usrUploaded: any, ',
            ' validFromDate: Date, ',
            ' versionNo   : string, ',
            ' versionType: string, ',
        ' } ',
    ' ], ',
    ' bankDetailChange: { ',
        ' bankDetail: { ',
            ' accName: string, ',
            ' accountNumber: string, ',
            ' address: string, ',
            ' currency: string, ',
            ' iban: string, ',
            ' ifscCode: string, ',
            ' name: string, ',
            ' routingNumber: string, ',
            ' swiftCode: string, ',
        ' } ',
        ' intermediaryBankDetail: { ',
            ' accName: string,' ,
            ' accountNumber: string,' ,
            ' address: string,' ,
            ' currency: string,' ,
            ' iban: string,' ,
            ' ifscCode: string,' ,
            ' name: string,' ,
            ' routingNumber: string,' ,
            ' swiftCode: string,' ,
        '}',
    ' }, ',
    ' comment: string, ',
    ' companyCode: string, ',
    ' contact: { ',
        ' admin: boolean, ',
        ' asPrimaryEmail: boolean, ',
        ' contactId: string, ',
        ' email: string, ',
        ' fax: { ',
            ' countryCode: string, ',
            ' extension: string, ',
            ' number: string, ',
        ' }, ',
        ' firstname: string, ',
        ' functionName: string, ',
        ' lastname: string, ',
        ' mobile: { ',
            ' countryCode: string, ',
            ' extension: string, ',
            ' number: string, ',
        ' }, ',
        ' phonenumber: { ',
            ' countryCode: string, ',
            ' extension: string, ',
            ' number: string, ',
        '},',
        ' portalAccount: boolean, ',
        ' roles: string[], ',
    '},',
    ' createdDate: Date, ',
    ' createdUserId: string, ',
    ' createdUserName: string, ',
    ' createddatetime: any, ',
    ' dbeChangeRequest : { ',
        ' dbeSelectedStatus: [ ',
            '{',
                ' attachment: { ',
                    ' arid: string, ',
                    ' attid: string, ',
                    ' creator: string, ',
                    ' documentType: string, ',
                    ' documentTypeDesc: string, ',
                    ' documentid: string, ',
                    ' expiryDate: Date, ',
                    ' filename: string, ',
                    ' filetype: string, ',
                    ' primaryDoc: boolean, ',
                    ' restricted: boolean, ',
                    ' upload: string, ',
                    ' uploadedBy: string, ',
                    ' uploadedDate: Date, ',
                    ' usrUploaded: number, ',
                    ' validFromDate: Date, ',
                    ' versionNo: string, ',
                    ' versionType: string, ',
                '},',
                ' certificationExpiryDate: Date, ',
                ' dbe: string, ',
                ' selected: boolean ',
            '}',
        ' ],',
        ' noMoreDBE: boolean ',
    '},',
    ' id: string, ',
    ' isSAPSynch: boolean, ',
    ' isSAPSynchACK: boolean, ',
    ' lastUpdated: any, ',
    ' logicalSystem: string, ',
    ' modifieddatetime: any, ',
    ' other: { ',
        ' comment: string ',
    ' }, ',
    ' pccr: { ',
        ' deSelectProductCatagories: string[], ',
        ' newProductCategories: string[], ',
  
    '},',
    ' prefix: string, ',
    ' refId: number, ',
    ' requestId: string, ',
    ' requestorEmail: string, ',
    ' sapSynchDate: any, ',
    ' sapsynch: boolean, ',
    ' state: { ',
        ' stage: string, ',
        ' status: string, ',
        ' stlStatus: string, ',
        ' wfState: { ',
            ' agent: string, ',
            ' editable: boolean, ',
            ' forwardedFromAgent: string, ',
            ' portalStl: boolean, ',
            ' ruleId: string, ',
            ' status: string, ',
            ' step: number, ',
            ' stl: boolean ',
        '}',
    '}, ',
    ' status: string, ',
    ' statusDesc: string, ',
    ' supplierId: string, ',
    ' syncToSAP: boolean, ',
    ' taxAndW9: { ',
        ' attachment: { ',
            ' arid: string, ',
            ' attid: string, ',
            ' creator: string, ',
            ' documentType: string, ',
            ' documentTypeDesc: string, ',
            ' documentid: string, ',
            ' expiryDate: Date, ',
            ' filename: string, ',
            ' filetype: string, ',
            ' primaryDoc: boolean, ',
            ' restricted: boolean, ',
            ' upload: string, ',
            ' uploadedBy: string, ',
            ' uploadedDate: Date, ',
            ' usrUploaded: any, ',
            ' validFromDate: Date, ',
            ' versionNo: string, ',
            ' versionType: string, ',
        '}, ',
        ' employeeIdNo: string, ',
        ' socialSecurityNo: string, ',
        ' taxIdType: string, ',
        ' w9SignatureDate: Date ',
    '}, ',
    ' type: string ',
'}',
' let vcr!: VCR; ',
].join('\n')