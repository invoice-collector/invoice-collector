
import { SketchCollector } from '../../sketchCollector';

export class ToolStationCollector extends SketchCollector {

    static CONFIG = {
        id: "tool_station",
        name: "Tool Station",
        description: "i18n.collectors.tool_station.description",
        version: "0",
        website: "https://www.toolstation.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/158597.jpg",
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
        entryUrl: "https://www.toolstation.com/login",
    }

    constructor() {
        super(ToolStationCollector.CONFIG);
    }
}
