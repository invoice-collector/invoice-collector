
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MindVerseCollector extends SketchCollector {

    static CONFIG = {
        id: "mind_verse",
        name: "mind verse",
        description: "i18n.collectors.mind_verse.description",
        version: "0",
        website: "https://ai.mind-verse.de/?p=settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1627054.jpg",
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
        entryUrl: "https://ai.mind-verse.de/?p=settings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MindVerseCollector.CONFIG);
    }
}
