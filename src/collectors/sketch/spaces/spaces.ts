
import { SketchCollector } from '../../sketchCollector';

export class SpacesCollector extends SketchCollector {

    static CONFIG = {
        id: "spaces",
        name: "Spaces",
        description: "i18n.collectors.spaces.description",
        version: "0",
        website: "https://myspacesworks.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32533.jpg",
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
        entryUrl: "https://myspacesworks.com/#/login",
    }

    constructor() {
        super(SpacesCollector.CONFIG);
    }
}
