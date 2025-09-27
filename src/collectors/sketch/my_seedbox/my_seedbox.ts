
import { SketchCollector } from '../../sketchCollector';

export class MySeedboxCollector extends SketchCollector {

    static CONFIG = {
        id: "my_seedbox",
        name: "My-seedbox",
        description: "i18n.collectors.my_seedbox.description",
        version: "0",
        website: "https://www.my-seedbox.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173568.jpg",
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
        entryUrl: "https://www.my-seedbox.com/login",
    }

    constructor() {
        super(MySeedboxCollector.CONFIG);
    }
}
