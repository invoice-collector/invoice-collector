
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MetarealCollector extends SketchCollector {

    static CONFIG = {
        id: "metareal",
        name: "metareal",
        description: "i18n.collectors.metareal.description",
        version: "0",
        website: "https://stage.metareal.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940357.jpg",
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
        entryUrl: "https://stage.metareal.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MetarealCollector.CONFIG);
    }
}
