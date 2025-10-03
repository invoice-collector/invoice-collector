
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FleuradaCollector extends SketchCollector {

    static CONFIG = {
        id: "fleurada",
        name: "Fleurada",
        description: "i18n.collectors.fleurada.description",
        version: "0",
        website: "https://www.fleurada.de/index.php?op=files",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148953.jpg",
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
        entryUrl: "https://www.fleurada.de/index.php?op=files",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FleuradaCollector.CONFIG);
    }
}
