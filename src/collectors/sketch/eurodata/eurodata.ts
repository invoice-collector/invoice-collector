
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EurodataCollector extends SketchCollector {

    static CONFIG = {
        id: "eurodata",
        name: "eurodata",
        description: "i18n.collectors.eurodata.description",
        version: "0",
        website: "http://www.eurodata.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20620.jpg",
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
        entryUrl: "http://www.eurodata.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EurodataCollector.CONFIG);
    }
}
