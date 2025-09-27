
import { SketchCollector } from '../../sketchCollector';

export class CursorCollector extends SketchCollector {

    static CONFIG = {
        id: "cursor",
        name: "Cursor",
        description: "i18n.collectors.cursor.description",
        version: "0",
        website: "https://www.cursor.com/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4175515.jpg",
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
        entryUrl: "https://www.cursor.com/settings",
    }

    constructor() {
        super(CursorCollector.CONFIG);
    }
}
