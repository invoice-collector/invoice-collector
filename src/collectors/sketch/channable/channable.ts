
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChannableCollector extends SketchCollector {

    static CONFIG = {
        id: "channable",
        name: "Channable",
        description: "i18n.collectors.channable.description",
        version: "0",
        website: "http://www.channable.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108654.jpg",
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
        entryUrl: "http://www.channable.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChannableCollector.CONFIG);
    }
}
