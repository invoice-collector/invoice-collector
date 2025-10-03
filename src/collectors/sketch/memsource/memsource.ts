
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MemsourceCollector extends SketchCollector {

    static CONFIG = {
        id: "memsource",
        name: "MemSource",
        description: "i18n.collectors.memsource.description",
        version: "0",
        website: "https://cloud.memsource.com/web/payment/subscribeOverview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1323398.jpg",
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
        entryUrl: "https://cloud.memsource.com/web/payment/subscribeOverview",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MemsourceCollector.CONFIG);
    }
}
