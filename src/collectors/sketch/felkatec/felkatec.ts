
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FelkatecCollector extends SketchCollector {

    static CONFIG = {
        id: "felkatec",
        name: "FELKATEC",
        description: "i18n.collectors.felkatec.description",
        version: "0",
        website: "http://kundenportal.felkatec.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9225.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "http://kundenportal.felkatec.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FelkatecCollector.CONFIG);
    }
}
