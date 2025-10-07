
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SquarespaceCollector extends SketchCollector {

    static CONFIG = {
        id: "squarespace",
        name: "SquareSpace",
        description: "i18n.collectors.squarespace.description",
        version: "0",
        website: "https://www.squarespace.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6453.jpg",
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
        entryUrl: "https://www.squarespace.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SquarespaceCollector.CONFIG);
    }
}
