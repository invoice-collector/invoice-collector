
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlbacrossCollector extends SketchCollector {

    static CONFIG = {
        id: "albacross",
        name: "Albacross",
        description: "i18n.collectors.albacross.description",
        version: "0",
        website: "app.albacross.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/157965.jpg",
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
        entryUrl: "app.albacross.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlbacrossCollector.CONFIG);
    }
}
