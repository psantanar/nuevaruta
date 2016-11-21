<!DOCTYPE html>
<html>
    <head>
        <meta name="layout" content="administrador" />
        <g:set var="entityName" value="${message(code: 'pago.label', default: 'Pago')}" />
        <title><g:message code="default.list.label" args="[entityName]" /></title>
    </head>
    <body>
        <div class="slider col s12 m9"><!-- Contenido derecho -->

            <a href="#list-pago" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
            <div class="nav" role="navigation">
                <ul>
                    <li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
                    <li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
                </ul>
            </div>
            <div id="list-pago" class="content scaffold-list" role="main">
                <h1><g:message code="default.list.label" args="[entityName]" /></h1>
                <g:if test="${flash.message}">
                    <div class="message" role="status">${flash.message}</div>
                </g:if>
                <f:table collection="${pagoList}" />

                <div class="pagination">
                    <g:paginate total="${pagoCount ?: 0}" />
                </div>
            </div>

        </div>
    </body>
</html>