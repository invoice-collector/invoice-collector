
import { SketchCollector } from '../../sketchCollector';

export class MatterportCollector extends SketchCollector {

    static CONFIG = {
        id: "matterport",
        name: "Matterport",
        description: "i18n.collectors.matterport.description",
        version: "0",
        website: "https://my.matterport.com/accounts/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31673.jpg",
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
        entryUrl: "https://my.matterport.com/accounts/login",
    }

    constructor() {
        super(MatterportCollector.CONFIG);
    }
}
