
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TheDriveryCollector extends SketchCollector {

    static CONFIG = {
        id: "the_drivery",
        name: "The Drivery",
        description: "i18n.collectors.the_drivery.description",
        version: "0",
        website: "https://space.thedrivery.com/membership",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/505993.jpg",
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
        entryUrl: "https://space.thedrivery.com/membership",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheDriveryCollector.CONFIG);
    }
}
