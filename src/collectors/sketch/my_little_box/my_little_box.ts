
import { SketchCollector } from '../../sketchCollector';

export class MyLittleBoxCollector extends SketchCollector {

    static CONFIG = {
        id: "my_little_box",
        name: "My little box",
        description: "i18n.collectors.my_little_box.description",
        version: "0",
        website: "https://www.mylittlebox.fr/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122541.jpg",
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
        entryUrl: "https://www.mylittlebox.fr/signin",
    }

    constructor() {
        super(MyLittleBoxCollector.CONFIG);
    }
}
