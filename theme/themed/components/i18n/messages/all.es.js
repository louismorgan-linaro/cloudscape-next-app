export default {
  '@cloudscape-design/components': {
    es: {
      '[charts]': {
        loadingText: [{ type: 0, value: 'Cargando gráfico' }],
        errorText: [{ type: 0, value: 'No se pudieron recuperar los datos. Inténtelo de nuevo más tarde.' }],
        recoveryText: [{ type: 0, value: 'Reintentar' }],
        'i18nStrings.filterLabel': [{ type: 0, value: 'Filtrar los datos mostrados' }],
        'i18nStrings.filterPlaceholder': [{ type: 0, value: 'Filtrar datos' }],
        'i18nStrings.legendAriaLabel': [{ type: 0, value: 'Leyenda' }],
        'i18nStrings.xAxisAriaRoleDescription': [{ type: 0, value: 'eje x' }],
        'i18nStrings.yAxisAriaRoleDescription': [{ type: 0, value: 'eje y' }],
      },
      alert: { dismissAriaLabel: [{ type: 0, value: 'Descartar alerta' }] },
      'annotation-context': {
        'i18nStrings.nextButtonText': [{ type: 0, value: 'Siguiente' }],
        'i18nStrings.previousButtonText': [{ type: 0, value: 'Anterior' }],
        'i18nStrings.finishButtonText': [{ type: 0, value: 'Finalizar' }],
        'i18nStrings.labelDismissAnnotation': [{ type: 0, value: 'Descartar anotación' }],
        'i18nStrings.stepCounterText': [
          { type: 0, value: 'Paso ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'totalStepCount' },
        ],
        'i18nStrings.taskTitle': [
          { type: 0, value: 'Tarea ' },
          { type: 1, value: 'taskNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'taskTitle' },
        ],
        'i18nStrings.labelHotspot': [
          {
            type: 5,
            value: 'openState',
            options: {
              true: {
                value: [
                  { type: 0, value: 'Cerrar anotación para el paso ' },
                  { type: 1, value: 'stepNumber' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'totalStepCount' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: 'Abrir anotación para el paso ' },
                  { type: 1, value: 'stepNumber' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'totalStepCount' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Navegación lateral' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Cerrar navegación lateral' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Abrir navegación lateral' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notificaciones' }],
        'ariaLabels.tools': [{ type: 0, value: 'Panel de ayuda' }],
        'ariaLabels.toolsClose': [{ type: 0, value: 'Cerrar panel de ayuda' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: 'Abrir panel de ayuda' }],
      },
      'area-chart': { 'i18nStrings.detailTotalLabel': [{ type: 0, value: 'Total' }] },
      'attribute-editor': { removeButtonText: [{ type: 0, value: 'Eliminar' }] },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Error' }],
        selectedAriaLabel: [{ type: 0, value: 'Seleccionado' }],
        enteredTextLabel: [
          { type: 0, value: 'Utilizar: “' },
          { type: 1, value: 'value' },
          { type: 0, value: '”' },
        ],
        recoveryText: [{ type: 0, value: 'Reintentar' }],
      },
      'breadcrumb-group': { expandAriaLabel: [{ type: 0, value: 'Mostrar ruta' }] },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Próximo mes' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Mes anterior' }],
        todayAriaLabel: [{ type: 0, value: 'Hoy' }],
      },
      cards: { 'ariaLabels.selectionGroupLabel': [{ type: 0, value: 'Selección de elementos' }] },
      'code-editor': {
        'i18nStrings.loadingState': [{ type: 0, value: 'Cargando editor de código' }],
        'i18nStrings.errorState': [{ type: 0, value: 'Se ha producido un error al cargar el editor de código.' }],
        'i18nStrings.errorStateRecovery': [{ type: 0, value: 'Reintentar' }],
        'i18nStrings.editorGroupAriaLabel': [{ type: 0, value: 'Editor de código' }],
        'i18nStrings.statusBarGroupAriaLabel': [{ type: 0, value: 'Barra de estado' }],
        'i18nStrings.cursorPosition': [
          { type: 0, value: 'Ln ' },
          { type: 1, value: 'row' },
          { type: 0, value: ', Col ' },
          { type: 1, value: 'column' },
        ],
        'i18nStrings.errorsTab': [{ type: 0, value: 'Errores' }],
        'i18nStrings.warningsTab': [{ type: 0, value: 'Advertencias' }],
        'i18nStrings.preferencesButtonAriaLabel': [{ type: 0, value: 'Preferencias' }],
        'i18nStrings.paneCloseButtonAriaLabel': [{ type: 0, value: 'Cerrar' }],
        'i18nStrings.preferencesModalHeader': [{ type: 0, value: 'Preferencias' }],
        'i18nStrings.preferencesModalCancel': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.preferencesModalConfirm': [{ type: 0, value: 'Confirmar' }],
        'i18nStrings.preferencesModalWrapLines': [{ type: 0, value: 'Ajustar líneas' }],
        'i18nStrings.preferencesModalTheme': [{ type: 0, value: 'Tema' }],
        'i18nStrings.preferencesModalLightThemes': [{ type: 0, value: 'Temas claros' }],
        'i18nStrings.preferencesModalDarkThemes': [{ type: 0, value: 'Temas oscuros' }],
      },
      'collection-preferences': {
        title: [{ type: 0, value: 'Preferencias' }],
        confirmLabel: [{ type: 0, value: 'Confirmar' }],
        cancelLabel: [{ type: 0, value: 'Cancelar' }],
        'pageSizePreference.title': [{ type: 0, value: 'Tamaño de página' }],
        'wrapLinesPreference.label': [{ type: 0, value: 'Ajustar líneas' }],
        'wrapLinesPreference.description': [
          { type: 0, value: 'Seleccione para ver todo el texto y ajustar las líneas' },
        ],
        'stripedRowsPreference.label': [{ type: 0, value: 'Filas rayadas' }],
        'stripedRowsPreference.description': [
          { type: 0, value: 'Seleccione para agregar filas sombreadas alternativas' },
        ],
        'contentDensityPreference.label': [{ type: 0, value: 'Modo compacto' }],
        'contentDensityPreference.description': [
          { type: 0, value: 'Seleccione para mostrar contenido en un modo más denso y compacto' },
        ],
        'contentDisplayPreference.title': [{ type: 0, value: 'Preferencias de columnas' }],
        'contentDisplayPreference.description': [
          { type: 0, value: 'Personalice la visibilidad y el orden de las columnas.' },
        ],
        'contentDisplayPreference.dragHandleAriaLabel': [{ type: 0, value: 'Arrastrar controlador' }],
        'contentDisplayPreference.dragHandleAriaDescription': [
          {
            type: 0,
            value:
              'Utilice la barra espaciadora o Enter para activar el arrastre de un elemento y, a continuación, utilice las teclas de flecha para mover la posición del elemento. Para completar el movimiento de la posición, utilice la barra espaciadora o Enter, o para descartar el movimiento, utilice Escape.',
          },
        ],
        'contentDisplayPreference.liveAnnouncementDndStarted': [
          { type: 0, value: 'Recogida del elemento en la posición ' },
          { type: 1, value: 'position' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'total' },
        ],
        'contentDisplayPreference.liveAnnouncementDndDiscarded': [{ type: 0, value: 'Reordenación cancelada' }],
        'contentDisplayPreference.liveAnnouncementDndItemReordered': [
          {
            type: 5,
            value: 'isInitialPosition',
            options: {
              true: {
                value: [
                  { type: 0, value: 'Mover el elemento de nuevo a la posición ' },
                  { type: 1, value: 'currentPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: 'Mover el elemento a la posición ' },
                  { type: 1, value: 'currentPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
        'contentDisplayPreference.liveAnnouncementDndItemCommitted': [
          {
            type: 5,
            value: 'isInitialPosition',
            options: {
              true: {
                value: [
                  { type: 0, value: 'El artículo ha vuelto a su posición original ' },
                  { type: 1, value: 'initialPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: 'El artículo se movió de la posición ' },
                  { type: 1, value: 'initialPosition' },
                  { type: 0, value: ' a la posición ' },
                  { type: 1, value: 'finalPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'date-range-picker': {
        'i18nStrings.relativeModeTitle': [{ type: 0, value: 'Modo relativo' }],
        'i18nStrings.absoluteModeTitle': [{ type: 0, value: 'Modo absoluto' }],
        'i18nStrings.relativeRangeSelectionHeading': [{ type: 0, value: 'Elegir un rango' }],
        'i18nStrings.cancelButtonLabel': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.clearButtonLabel': [{ type: 0, value: 'Borrar y descartar' }],
        'i18nStrings.applyButtonLabel': [{ type: 0, value: 'Aplicar' }],
        'i18nStrings.customRelativeRangeOptionLabel': [{ type: 0, value: 'Rango personalizado' }],
        'i18nStrings.customRelativeRangeOptionDescription': [
          { type: 0, value: 'Establecer un rango personalizado en el pasado' },
        ],
        'i18nStrings.customRelativeRangeUnitLabel': [{ type: 0, value: 'Unidad de tiempo' }],
        'i18nStrings.customRelativeRangeDurationLabel': [{ type: 0, value: 'Duración' }],
        'i18nStrings.customRelativeRangeDurationPlaceholder': [{ type: 0, value: 'Introduzca una duración' }],
        'i18nStrings.startDateLabel': [{ type: 0, value: 'Fecha de inicio' }],
        'i18nStrings.startTimeLabel': [{ type: 0, value: 'Hora de inicio' }],
        'i18nStrings.endDateLabel': [{ type: 0, value: 'Fecha de finalización' }],
        'i18nStrings.endTimeLabel': [{ type: 0, value: 'Hora de finalización' }],
        'i18nStrings.dateTimeConstraintText': [
          { type: 0, value: 'Para la fecha, utilice AAAA/MM/DD. Para la hora, utilice el formato de 24 horas.' },
        ],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Error' }],
        'i18nStrings.renderSelectedAbsoluteRangeAriaLive': [
          { type: 0, value: 'Rango seleccionado de ' },
          { type: 1, value: 'startDate' },
          { type: 0, value: ' a ' },
          { type: 1, value: 'endDate' },
        ],
        'i18nStrings.formatRelativeRange': [
          {
            type: 6,
            value: 'amount',
            options: {
              one: {
                value: [
                  { type: 0, value: 'Último ' },
                  { type: 1, value: 'amount' },
                  { type: 0, value: ' ' },
                  { type: 1, value: 'unit' },
                ],
              },
              other: {
                value: [
                  { type: 0, value: 'Últimos ' },
                  { type: 1, value: 'amount' },
                  { type: 0, value: ' ' },
                  { type: 1, value: 'unit' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.formatUnit': [
          {
            type: 6,
            value: 'amount',
            options: { one: { value: [{ type: 1, value: 'unit' }] }, other: { value: [{ type: 1, value: 'unit' }] } },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
      },
      drawer: { 'i18nStrings.loadingText': [{ type: 0, value: 'Cargando contenido' }] },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notificaciones' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Error' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'En curso' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Información' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Todas las notificaciones' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notificaciones' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Éxito' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Advertencia' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Error' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Error' }] },
      'help-panel': { loadingText: [{ type: 0, value: 'Cargando contenido' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Borrar' }] },
      link: { externalIconAriaLabel: [{ type: 0, value: 'Abrir en una pestaña nueva' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Cerrar modal' }] },
      multiselect: {
        deselectAriaLabel: [
          { type: 0, value: 'Eliminar ' },
          { type: 1, value: 'option__label' },
        ],
      },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Página siguiente' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Página ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' de todas las páginas' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Página anterior' }],
      },
      'pie-chart': {
        'i18nStrings.detailsValue': [{ type: 0, value: 'Valor' }],
        'i18nStrings.detailsPercentage': [{ type: 0, value: 'Porcentaje' }],
        'i18nStrings.chartAriaRoleDescription': [{ type: 0, value: 'Gráfico circular' }],
        'i18nStrings.segmentAriaRoleDescription': [{ type: 0, value: 'Segmento' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Cerrar ventana emergente' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Todas las propiedades' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Aplicar' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Borrar filtros' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Editar filtro' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Propiedades' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Valores' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'y' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'o' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Contiene' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'No contiene' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: 'No es igual a' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Igual a' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Mayor o igual que' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Mayor que' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Menor o igual que' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Menor que' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Operador' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Operadores' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Propiedad' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Mostrar menos' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Mostrar más' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Valor' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' no es igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' es mayor que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' es mayor o igual que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' es menor que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' es menor o igual que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' contiene ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' no contiene ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      's3-resource-selector': {
        'i18nStrings.inContextSelectPlaceholder': [{ type: 0, value: 'Elija una versión' }],
        'i18nStrings.inContextBrowseButton': [{ type: 0, value: 'Explorar S3' }],
        'i18nStrings.inContextViewButton': [{ type: 0, value: 'Ver' }],
        'i18nStrings.inContextViewButtonAriaLabel': [{ type: 0, value: 'Ver (se abre en una pestaña nueva)' }],
        'i18nStrings.inContextLoadingText': [{ type: 0, value: 'Cargando recurso' }],
        'i18nStrings.inContextUriLabel': [{ type: 0, value: 'URI de S3' }],
        'i18nStrings.inContextVersionSelectLabel': [{ type: 0, value: 'Versión del objeto' }],
        'i18nStrings.modalTitle': [{ type: 0, value: 'Elija un archivo en S3' }],
        'i18nStrings.modalCancelButton': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.modalSubmitButton': [{ type: 0, value: 'Elija' }],
        'i18nStrings.modalBreadcrumbRootItem': [{ type: 0, value: 'Buckets de S3' }],
        'i18nStrings.selectionBuckets': [{ type: 0, value: 'Buckets' }],
        'i18nStrings.selectionObjects': [{ type: 0, value: 'Objetos' }],
        'i18nStrings.selectionVersions': [{ type: 0, value: 'Versiones' }],
        'i18nStrings.selectionBucketsSearchPlaceholder': [{ type: 0, value: 'Encuentra un bucket' }],
        'i18nStrings.selectionObjectsSearchPlaceholder': [{ type: 0, value: 'Buscar objeto por el prefijo' }],
        'i18nStrings.selectionVersionsSearchPlaceholder': [{ type: 0, value: 'Encuentre la versión' }],
        'i18nStrings.selectionBucketsLoading': [{ type: 0, value: 'Cargando buckets' }],
        'i18nStrings.selectionBucketsNoItems': [{ type: 0, value: 'No hay buckets' }],
        'i18nStrings.selectionObjectsLoading': [{ type: 0, value: 'Cargando objetos' }],
        'i18nStrings.selectionObjectsNoItems': [{ type: 0, value: 'No hay objetos' }],
        'i18nStrings.selectionVersionsLoading': [{ type: 0, value: 'Cargando versiones' }],
        'i18nStrings.selectionVersionsNoItems': [{ type: 0, value: 'No hay versiones' }],
        'i18nStrings.filteringNoMatches': [{ type: 0, value: 'No hay coincidencias' }],
        'i18nStrings.filteringCantFindMatch': [{ type: 0, value: 'No se encuentra ninguna coincidencia.' }],
        'i18nStrings.clearFilterButtonText': [{ type: 0, value: 'Borrar filtro' }],
        'i18nStrings.columnBucketID': [{ type: 0, value: 'ID' }],
        'i18nStrings.columnBucketName': [{ type: 0, value: 'Nombre' }],
        'i18nStrings.columnBucketCreationDate': [{ type: 0, value: 'Fecha de creación' }],
        'i18nStrings.columnBucketRegion': [{ type: 0, value: 'Región' }],
        'i18nStrings.columnObjectKey': [{ type: 0, value: 'Clave' }],
        'i18nStrings.columnObjectLastModified': [{ type: 0, value: 'Modificado por última vez' }],
        'i18nStrings.columnObjectSize': [{ type: 0, value: 'Tamaño' }],
        'i18nStrings.columnVersionID': [{ type: 0, value: 'ID de la versión' }],
        'i18nStrings.columnVersionLastModified': [{ type: 0, value: 'Modificado por última vez' }],
        'i18nStrings.columnVersionSize': [{ type: 0, value: 'Tamaño' }],
        'i18nStrings.validationPathMustBegin': [{ type: 0, value: 'La ruta debe empezar por s3://' }],
        'i18nStrings.validationBucketLowerCase': [
          { type: 0, value: 'El nombre del bucket debe empezar por un carácter o número en minúscula.' },
        ],
        'i18nStrings.validationBucketMustNotContain': [
          { type: 0, value: 'El nombre del bucket no debe contener caracteres en mayúscula.' },
        ],
        'i18nStrings.validationBucketLength': [
          { type: 0, value: 'El nombre del bucket debe tener entre 3 y 63 caracteres.' },
        ],
        'i18nStrings.validationBucketMustComplyDns': [
          { type: 0, value: 'El nombre del bucket debe cumplir con las convenciones de nomenclatura de DNS.' },
        ],
        'i18nStrings.labelSortedDescending': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', ordenados de forma descendente' },
        ],
        'i18nStrings.labelSortedAscending': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', ordenados de forma ascendente' },
        ],
        'i18nStrings.labelNotSorted': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', no ordenados' },
        ],
        'i18nStrings.labelsBucketsSelection.selectionGroupLabel': [{ type: 0, value: 'Buckets' }],
        'i18nStrings.labelsBucketsSelection.itemSelectionLabel': [{ type: 1, value: 'item__Name' }],
        'i18nStrings.labelsObjectsSelection.selectionGroupLabel': [{ type: 0, value: 'Objetos' }],
        'i18nStrings.labelsObjectsSelection.itemSelectionLabel': [{ type: 1, value: 'item__Key' }],
        'i18nStrings.labelsVersionsSelection.selectionGroupLabel': [{ type: 0, value: 'Versiones' }],
        'i18nStrings.labelsVersionsSelection.itemSelectionLabel': [{ type: 1, value: 'item__VersionId' }],
        'i18nStrings.labelFiltering': [
          { type: 0, value: 'Encuentre ' },
          { type: 1, value: 'itemsType' },
        ],
        'i18nStrings.labelRefresh': [{ type: 0, value: 'Actualizar los datos' }],
        'i18nStrings.labelBreadcrumbs': [{ type: 0, value: 'Navegación S3' }],
        'i18nStrings.filteringCounterText': [
          {
            type: 6,
            value: 'count',
            options: {
              one: { value: [{ type: 0, value: '1 coincidencia' }] },
              other: {
                value: [
                  { type: 1, value: 'count' },
                  { type: 0, value: ' coincidencias' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Error' }],
        selectedAriaLabel: [{ type: 0, value: 'Seleccionado' }],
        recoveryText: [{ type: 0, value: 'Reintentar' }],
      },
      'split-panel': {
        'i18nStrings.closeButtonAriaLabel': [{ type: 0, value: 'Cerrar panel' }],
        'i18nStrings.openButtonAriaLabel': [{ type: 0, value: 'Abrir panel' }],
        'i18nStrings.preferencesTitle': [{ type: 0, value: 'Preferencias de panel dividido' }],
        'i18nStrings.preferencesPositionLabel': [{ type: 0, value: 'Posición del panel dividido' }],
        'i18nStrings.preferencesPositionDescription': [
          { type: 0, value: 'Elija la posición predeterminada del panel dividido para el servicio.' },
        ],
        'i18nStrings.preferencesPositionSide': [{ type: 0, value: 'Lateral' }],
        'i18nStrings.preferencesPositionBottom': [{ type: 0, value: 'Parte inferior' }],
        'i18nStrings.preferencesConfirm': [{ type: 0, value: 'Confirmar' }],
        'i18nStrings.preferencesCancel': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.resizeHandleAriaLabel': [{ type: 0, value: 'Cambiar el tamaño del panel dividido' }],
      },
      table: {
        'ariaLabels.submittingEditText': [{ type: 0, value: 'Envío de edición' }],
        'ariaLabels.successfulEditLabel': [{ type: 0, value: 'Se ha editado correctamente' }],
        'columnDefinitions.editConfig.errorIconAriaLabel': [{ type: 0, value: 'Error' }],
        'columnDefinitions.editConfig.editIconAriaLabel': [{ type: 0, value: 'editable' }],
      },
      tabs: {
        'i18nStrings.scrollLeftAriaLabel': [{ type: 0, value: 'Desplácese hacia la izquierda' }],
        'i18nStrings.scrollRightAriaLabel': [{ type: 0, value: 'Desplácese hacia la derecha' }],
      },
      'tag-editor': {
        'i18nStrings.keyPlaceholder': [{ type: 0, value: 'Ingresar clave' }],
        'i18nStrings.valuePlaceholder': [{ type: 0, value: 'Ingresar valor' }],
        'i18nStrings.addButton': [{ type: 0, value: 'Agregar nueva etiqueta' }],
        'i18nStrings.removeButton': [{ type: 0, value: 'Eliminar' }],
        'i18nStrings.removeButtonAriaLabel': [
          { type: 0, value: 'Eliminar ' },
          { type: 1, value: 'tag__key' },
        ],
        'i18nStrings.undoButton': [{ type: 0, value: 'Deshacer' }],
        'i18nStrings.undoPrompt': [
          { type: 0, value: 'Esta etiqueta se eliminará una vez que se guarden los cambios.' },
        ],
        'i18nStrings.loading': [{ type: 0, value: 'Cargando las etiquetas asociadas con este recurso' }],
        'i18nStrings.keyHeader': [{ type: 0, value: 'Clave' }],
        'i18nStrings.valueHeader': [{ type: 0, value: 'Valor' }],
        'i18nStrings.optional': [{ type: 0, value: 'opcional' }],
        'i18nStrings.keySuggestion': [{ type: 0, value: 'Clave de etiqueta personalizada' }],
        'i18nStrings.valueSuggestion': [{ type: 0, value: 'Valor de etiqueta personalizado' }],
        'i18nStrings.emptyTags': [{ type: 0, value: 'No hay etiquetas asociadas con el recurso.' }],
        'i18nStrings.tooManyKeysSuggestion': [{ type: 0, value: 'Tiene más claves de las que se pueden mostrar.' }],
        'i18nStrings.tooManyValuesSuggestion': [{ type: 0, value: 'Tiene más valores de los que se pueden mostrar.' }],
        'i18nStrings.keysSuggestionLoading': [{ type: 0, value: 'Cargando claves de etiqueta' }],
        'i18nStrings.keysSuggestionError': [{ type: 0, value: 'No se pudieron recuperar las claves de etiqueta.' }],
        'i18nStrings.valuesSuggestionLoading': [{ type: 0, value: 'Cargando valores de etiqueta' }],
        'i18nStrings.valuesSuggestionError': [{ type: 0, value: 'No se pudieron recuperar los valores de etiqueta.' }],
        'i18nStrings.emptyKeyError': [{ type: 0, value: 'Debe especificar una clave de etiqueta.' }],
        'i18nStrings.maxKeyCharLengthError': [
          { type: 0, value: 'En una clave de etiqueta, puede utilizar 128 caracteres como máximo.' },
        ],
        'i18nStrings.maxValueCharLengthError': [
          { type: 0, value: 'En un valor de etiqueta, puede utilizar 256 caracteres como máximo.' },
        ],
        'i18nStrings.duplicateKeyError': [{ type: 0, value: 'Debe especificar una clave de etiqueta que sea única.' }],
        'i18nStrings.invalidKeyError': [
          {
            type: 0,
            value:
              'La clave no es válida. Las claves solo pueden contener letras de un solo código, dígitos, espacios en blanco y uno de los siguientes símbolos: _.:/=+@-.',
          },
        ],
        'i18nStrings.invalidValueError': [
          {
            type: 0,
            value:
              'El valor no es válido. Los valores solo pueden contener letras de un solo código, dígitos, espacios en blanco y uno de los siguientes símbolos: _.:/=+@-.',
          },
        ],
        'i18nStrings.awsPrefixError': [{ type: 0, value: 'No se puede iniciar con “aws:”.' }],
        'i18nStrings.tagLimitReached': [
          {
            type: 6,
            value: 'tagLimit',
            options: {
              one: { value: [{ type: 0, value: 'Alcanzó el límite de 1 etiqueta.' }] },
              other: {
                value: [
                  { type: 0, value: 'Alcanzó el límite de ' },
                  { type: 1, value: 'tagLimit' },
                  { type: 0, value: ' etiquetas.' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.tagLimitExceeded': [
          {
            type: 6,
            value: 'tagLimit',
            options: {
              one: { value: [{ type: 0, value: 'Superó el límite de 1 etiqueta.' }] },
              other: {
                value: [
                  { type: 0, value: 'Superó el límite de ' },
                  { type: 1, value: 'tagLimit' },
                  { type: 0, value: ' etiquetas.' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.tagLimit': [
          {
            type: 5,
            value: 'tagLimitAvailable',
            options: {
              true: {
                value: [
                  {
                    type: 6,
                    value: 'availableTags',
                    options: {
                      other: {
                        value: [
                          { type: 0, value: 'Puede agregar hasta ' },
                          { type: 1, value: 'tagLimit' },
                          { type: 0, value: ' etiquetas.' },
                        ],
                      },
                    },
                    offset: 0,
                    pluralType: 'cardinal',
                  },
                ],
              },
              false: {
                value: [
                  {
                    type: 6,
                    value: 'availableTags',
                    options: {
                      one: { value: [{ type: 0, value: 'Puede agregar hasta 1 etiqueta más.' }] },
                      other: {
                        value: [
                          { type: 0, value: 'Puede agregar hasta ' },
                          { type: 1, value: 'availableTags' },
                          { type: 0, value: ' etiquetas más.' },
                        ],
                      },
                    },
                    offset: 0,
                    pluralType: 'cardinal',
                  },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'token-group': {
        'i18nStrings.limitShowFewer': [{ type: 0, value: 'Mostrar menos' }],
        'i18nStrings.limitShowMore': [{ type: 0, value: 'Mostrar más' }],
      },
      'top-navigation': {
        'i18nStrings.searchIconAriaLabel': [{ type: 0, value: 'Buscar' }],
        'i18nStrings.searchDismissIconAriaLabel': [{ type: 0, value: 'Cerrar búsqueda' }],
        'i18nStrings.overflowMenuTriggerText': [{ type: 0, value: 'Más' }],
        'i18nStrings.overflowMenuDismissIconAriaLabel': [{ type: 0, value: 'Cerrar menú' }],
        'i18nStrings.overflowMenuBackIconAriaLabel': [{ type: 0, value: 'Volver' }],
        'i18nStrings.overflowMenuTitleText': [{ type: 0, value: 'Todos' }],
      },
      'tutorial-panel': {
        'i18nStrings.loadingText': [{ type: 0, value: 'Cargando' }],
        'i18nStrings.tutorialListTitle': [{ type: 0, value: 'Elija un tutorial' }],
        'i18nStrings.tutorialListDownloadLinkText': [{ type: 0, value: 'Descargar versión en PDF' }],
        'i18nStrings.labelTutorialListDownloadLink': [
          { type: 0, value: 'Descargue la versión en PDF de este tutorial' },
        ],
        'i18nStrings.tutorialCompletedText': [{ type: 0, value: 'Tutorial completado' }],
        'i18nStrings.learnMoreLinkText': [{ type: 0, value: 'Más información' }],
        'i18nStrings.startTutorialButtonText': [{ type: 0, value: 'Tutorial de inicio' }],
        'i18nStrings.restartTutorialButtonText': [{ type: 0, value: 'Tutorial de reinicio' }],
        'i18nStrings.completionScreenTitle': [{ type: 0, value: '¡Enhorabuena! Ha completado el tutorial.' }],
        'i18nStrings.feedbackLinkText': [{ type: 0, value: 'Comentarios' }],
        'i18nStrings.dismissTutorialButtonText': [{ type: 0, value: 'Descartar tutorial' }],
        'i18nStrings.taskTitle': [
          { type: 0, value: 'Tarea ' },
          { type: 1, value: 'taskNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'taskTitle' },
        ],
        'i18nStrings.stepTitle': [
          { type: 0, value: 'Paso' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ':' },
          { type: 1, value: 'stepTitle' },
        ],
        'i18nStrings.labelExitTutorial': [{ type: 0, value: 'Descartar tutorial' }],
        'i18nStrings.labelTotalSteps': [
          { type: 0, value: 'Total de pasos: ' },
          { type: 1, value: 'totalStepCount' },
        ],
        'i18nStrings.labelsTaskStatus.pending': [{ type: 0, value: 'Pendiente' }],
        'i18nStrings.labelsTaskStatus.in-progress': [{ type: 0, value: 'En curso' }],
        'i18nStrings.labelsTaskStatus.success': [{ type: 0, value: 'Acción realizada correctamente' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Paso ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Paso ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.skipToButtonLabel': [
          { type: 0, value: 'Vaya a ' },
          { type: 1, value: 'task__title' },
        ],
        'i18nStrings.navigationAriaLabel': [{ type: 0, value: 'Pasos' }],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Anterior' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Siguiente' }],
        'i18nStrings.optional': [{ type: 0, value: 'opcional' }],
        'i18nStrings.nextButtonLoadingAnnouncement': [{ type: 0, value: 'Cargando paso siguiente' }],
        'i18nStrings.submitButtonLoadingAnnouncement': [{ type: 0, value: 'Formulario de envío' }],
      },
    },
  },
};
