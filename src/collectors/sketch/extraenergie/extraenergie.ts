
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ExtraenergieCollector extends SketchCollector {

    static CONFIG = {
        id: "extraenergie",
        name: "extraenergie",
        description: "i18n.collectors.extraenergie.description",
        version: "0",
        website: "https://www.extraenergie.com/selfcare",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7996.jpg",
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
        entryUrl: "https://www.extraenergie.com/selfcare",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ExtraenergieCollector.CONFIG);
    }
}
