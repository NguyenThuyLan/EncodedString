using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;

namespace EncodedString
{
	public class EncodedStringValueConverter : IPropertyValueConverter
	{
		public object? ConvertIntermediateToObject(IPublishedElement owner, IPublishedPropertyType propertyType, PropertyCacheLevel referenceCacheLevel, object? inter, bool preview)
		{
			return inter as EncodedString;
		}

		public object? ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType, object? source, bool preview)
		{
			return new EncodedString()
			{
				Value = source as string
			};
		}

		public PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType)
		{
			return PropertyCacheLevel.Element;
		}

		public Type GetPropertyValueType(IPublishedPropertyType propertyType)
		{
			return typeof(EncodedString);
		}

		public bool IsConverter(IPublishedPropertyType propertyType)
		{
			return propertyType.EditorUiAlias.Equals("EncodedString");
		}
		public bool? IsValue(object? value, PropertyValueLevel level)
		{
			return !string.IsNullOrWhiteSpace(value as string);
		}
	}
}
