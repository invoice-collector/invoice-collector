
import { SketchCollector } from '../../sketchCollector';

export class BackboneCollector extends SketchCollector {

    static CONFIG = {
        id: "backbone",
        name: "Backbone",
        description: "i18n.collectors.backbone.description",
        version: "0",
        website: "https://app.bkbn.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1540087.jpg",
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
        entryUrl: "https://app.bkbn.com/",
    }

    constructor() {
        super(BackboneCollector.CONFIG);
    }
}
