
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Ready2orderCollector extends SketchCollector {

    static CONFIG = {
        id: "ready2order",
        name: "ready2order",
        description: "i18n.collectors.ready2order.description",
        version: "0",
        website: "https://my.ready2order.at/#views/settings.php?id=3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10971.jpg",
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
        entryUrl: "https://my.ready2order.at/#views/settings.php?id=3",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Ready2orderCollector.CONFIG);
    }
}
