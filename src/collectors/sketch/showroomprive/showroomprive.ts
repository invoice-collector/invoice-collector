
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ShowroompriveCollector extends SketchCollector {

    static CONFIG = {
        id: "showroomprive",
        name: "ShowRoomPrive",
        description: "i18n.collectors.showroomprive.description",
        version: "0",
        website: "https://www.showroomprive.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778931.jpg",
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
        entryUrl: "https://www.showroomprive.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShowroompriveCollector.CONFIG);
    }
}
