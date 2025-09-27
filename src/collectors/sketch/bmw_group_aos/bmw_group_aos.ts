
import { SketchCollector } from '../../sketchCollector';

export class BmwGroupAosCollector extends SketchCollector {

    static CONFIG = {
        id: "bmw_group_aos",
        name: "BMW Group AOS",
        description: "i18n.collectors.bmw_group_aos.description",
        version: "0",
        website: "https://aos.bmwgroup.com/login/login_www.fcc?TYPE=33619969&REALMOID=06-19247b09-132c-4935-b7ea-99d11699c8f0&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$%2fuiS57HryfFZpuB%2fmaZC2uDFOuarR9pRPre0uRWBpCy1PBIAK88R8XmEIuR76gQT&TARGET=$SM$https%3a%2f%2faos%2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/411240.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://aos.bmwgroup.com/login/login_www.fcc?TYPE=33619969&REALMOID=06-19247b09-132c-4935-b7ea-99d11699c8f0&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$%2fuiS57HryfFZpuB%2fmaZC2uDFOuarR9pRPre0uRWBpCy1PBIAK88R8XmEIuR76gQT&TARGET=$SM$https%3a%2f%2faos%2",
    }

    constructor() {
        super(BmwGroupAosCollector.CONFIG);
    }
}
