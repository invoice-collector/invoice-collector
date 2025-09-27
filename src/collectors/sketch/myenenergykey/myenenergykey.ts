
import { SketchCollector } from '../../sketchCollector';

export class MyenenergykeyCollector extends SketchCollector {

    static CONFIG = {
        id: "myenenergykey",
        name: "myenenergykey",
        description: "i18n.collectors.myenenergykey.description",
        version: "0",
        website: "https://myenergykey.com/login?state=hKFo2SAzdFhxZWVMZy1pUXFDMF9BNjJ0SUNLdXc5Uk83UVY1VaFupWxvZ2luo3RpZNkgM0RrVDhJMUpuX1ViNHF2aHZ2ZllVd3M5b1o0dWpTLXCjY2lk2SBDcGJhTnRVTGtkRXlEajRtdUo5SjZ6d05vdTNtVEJyQQ&client=CpbaNtULkdEyDj4muJ9J6zwNou3mTBrA&protocol=oauth2&",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2027034.jpg",
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
        entryUrl: "https://myenergykey.com/login?state=hKFo2SAzdFhxZWVMZy1pUXFDMF9BNjJ0SUNLdXc5Uk83UVY1VaFupWxvZ2luo3RpZNkgM0RrVDhJMUpuX1ViNHF2aHZ2ZllVd3M5b1o0dWpTLXCjY2lk2SBDcGJhTnRVTGtkRXlEajRtdUo5SjZ6d05vdTNtVEJyQQ&client=CpbaNtULkdEyDj4muJ9J6zwNou3mTBrA&protocol=oauth2&",
    }

    constructor() {
        super(MyenenergykeyCollector.CONFIG);
    }
}
