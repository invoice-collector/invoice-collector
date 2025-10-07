
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShiftjugglerCollector extends SketchCollector {

    static CONFIG = {
        id: "shiftjuggler",
        name: "ShiftJuggler",
        description: "i18n.collectors.shiftjuggler.description",
        version: "0",
        website: "http://www.shiftjuggler.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30043.jpg",
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
        entryUrl: "http://www.shiftjuggler.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShiftjugglerCollector.CONFIG);
    }
}
