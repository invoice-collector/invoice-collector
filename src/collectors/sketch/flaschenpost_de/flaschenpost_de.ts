
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlaschenpostDeCollector extends SketchCollector {

    static CONFIG = {
        id: "flaschenpost_de",
        name: "Flaschenpost (.de)",
        description: "i18n.collectors.flaschenpost_de.description",
        version: "0",
        website: "https://www.flaschenpost.de/Account/Overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52779.jpg",
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
        entryUrl: "https://www.flaschenpost.de/Account/Overview",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlaschenpostDeCollector.CONFIG);
    }
}
