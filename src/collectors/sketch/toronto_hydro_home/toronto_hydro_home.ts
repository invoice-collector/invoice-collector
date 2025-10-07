
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TorontoHydroHomeCollector extends SketchCollector {

    static CONFIG = {
        id: "toronto_hydro_home",
        name: "Toronto Hydro - Home",
        description: "i18n.collectors.toronto_hydro_home.description",
        version: "0",
        website: "https://css.torontohydro.com/selfserve/pages/login.aspx?ReturnUrl=%2f_layouts%2fAuthenticate.aspx%3fSource%3d%252f&Source=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121689.jpg",
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
        entryUrl: "https://css.torontohydro.com/selfserve/pages/login.aspx?ReturnUrl=%2f_layouts%2fAuthenticate.aspx%3fSource%3d%252f&Source=%2f",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TorontoHydroHomeCollector.CONFIG);
    }
}
