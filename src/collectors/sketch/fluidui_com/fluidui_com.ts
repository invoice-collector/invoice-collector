
import { SketchCollector } from '../../sketchCollector';

export class FluiduiComCollector extends SketchCollector {

    static CONFIG = {
        id: "fluidui_com",
        name: "FluidUI.com",
        description: "i18n.collectors.fluidui_com.description",
        version: "0",
        website: "https://www.fluidui.com/editor/live/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71179.jpg",
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
        entryUrl: "https://www.fluidui.com/editor/live/",
    }

    constructor() {
        super(FluiduiComCollector.CONFIG);
    }
}
