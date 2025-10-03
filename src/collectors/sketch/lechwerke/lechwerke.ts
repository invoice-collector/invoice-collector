
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LechwerkeCollector extends SketchCollector {

    static CONFIG = {
        id: "lechwerke",
        name: "Lechwerke",
        description: "i18n.collectors.lechwerke.description",
        version: "0",
        website: "https://www.lew.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/90722.jpg",
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
        entryUrl: "https://www.lew.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LechwerkeCollector.CONFIG);
    }
}
