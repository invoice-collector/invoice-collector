
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GemfuryCollector extends SketchCollector {

    static CONFIG = {
        id: "gemfury",
        name: "Gemfury",
        description: "i18n.collectors.gemfury.description",
        version: "0",
        website: "https://manage.fury.io/manage/orgs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14235.jpg",
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
        entryUrl: "https://manage.fury.io/manage/orgs",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GemfuryCollector.CONFIG);
    }
}
