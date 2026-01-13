
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DedarComCollector extends SketchCollector {

    static CONFIG = {
        id: "dedar_com",
        name: "Dedar",
        description: "i18n.collectors.dedar_com.description",
        version: "0",
        website: "https://dedar.com/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-2Jwj3kDWx3z-Nkibff0VQpSuWSdehProYEydPe38IyG4rDL_FlwNEMRe91lBott71E&usqp=CAU",
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
        loginUrl: "https://dedar.com/login.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DedarComCollector.CONFIG);
    }
}
