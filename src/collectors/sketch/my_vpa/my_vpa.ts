
import { SketchCollector } from '../../sketchCollector';

export class MyVpaCollector extends SketchCollector {

    static CONFIG = {
        id: "my_vpa",
        name: "my-vpa",
        description: "i18n.collectors.my_vpa.description",
        version: "0",
        website: "https://app.my-vpa.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23100.jpg",
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
        entryUrl: "https://app.my-vpa.com/users/login",
    }

    constructor() {
        super(MyVpaCollector.CONFIG);
    }
}
