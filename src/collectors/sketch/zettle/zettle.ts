
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZettleCollector extends SketchCollector {

    static CONFIG = {
        id: "zettle",
        name: "Zettle",
        description: "i18n.collectors.zettle.description",
        version: "0",
        website: "https://my.izettle.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6095.jpg",
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
        entryUrl: "https://my.izettle.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZettleCollector.CONFIG);
    }
}
