
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FizzCollector extends SketchCollector {

    static CONFIG = {
        id: "fizz",
        name: "fizz",
        description: "i18n.collectors.fizz.description",
        version: "0",
        website: "https://fizz.ca/en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/749609.jpg",
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
        entryUrl: "https://fizz.ca/en",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FizzCollector.CONFIG);
    }
}
