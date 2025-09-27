
import { SketchCollector } from '../../sketchCollector';

export class FlyinguploadCollector extends SketchCollector {

    static CONFIG = {
        id: "flyingupload",
        name: "FlyingUpload",
        description: "i18n.collectors.flyingupload.description",
        version: "0",
        website: "https://flyingupload.com/user-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776462.jpg",
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
        entryUrl: "https://flyingupload.com/user-account/",
    }

    constructor() {
        super(FlyinguploadCollector.CONFIG);
    }
}
